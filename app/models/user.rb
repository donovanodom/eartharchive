class User < ApplicationRecord
  has_secure_password
  validates :first_name, presence: {on: :create}, length: {minimum: 2, maximum: 50}
  validates :last_name, presence: {on: :create}, length: {minimum: 2, maximum: 50}
  validates :username, presence: {on: :create}, length: {minimum: 3, maximum: 15}, uniqueness: true
  validates :email, presence: {on: :create}, uniqueness: true
  validates :password, length: {minimum: 10, maximum: 30}
  validates :password_confirmation, presence: {on: :create}
  validate :validate_first_name, :validate_last_name, :validate_username, :validate_email, :validate_password

  def validate_first_name
    return if first_name.blank?
    errors.add( :first_name, 'can only be letters') unless first_name.match(/^[a-zA-Z]+$/)
    errors.add( :first_name, 'must not have any blank spaces') if first_name.match(/\s/)
  end

  def validate_last_name
    return if last_name.blank?
    errors.add( :last_name, 'can only be letters') unless last_name.match(/^[a-zA-Z]+$/)
    errors.add( :last_name, 'must not have any blank spaces') if last_name.match(/\s/)
  end

  def validate_username
    return if username.blank?
    errors.add( :username, 'can only be letters, numbers or underscores') unless username.match(/^[a-zA-Z0-9_]*$/)
    errors.add( :username, 'must not have any blank spaces') if username.match(/\s/)
  end
  
  def validate_email
    return if email.blank?
    errors.add( :email, email + ' is not a valid email address') unless email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)
    errors.add( :email, 'must not have any blank spaces') if email.match(/\s/)
  end

  def validate_password
    return if password.blank?
    errors.add( :password, 'must contain at least one capital letter' ) unless password.match(/[A-Z]+/)
    errors.add( :password, 'must contain at least one lowercase letter' ) unless password.match(/[a-z]+/)
    errors.add( :password, 'must contain at least one number' ) unless password.match(/\d+/)
    errors.add( :password, "can only have '$', '@', '!', '_', or '-' as special characters") unless password.match(/^[0-9A-Za-z$@!_-]*$/)
    errors.add( :password, 'must not have any blank spaces') if password.match(/\s/)
    password_score = Zxcvbn.test(password).score
    if password_score < 3
      errors.add( :password, 'not strong enough' )
    end
  end
end
