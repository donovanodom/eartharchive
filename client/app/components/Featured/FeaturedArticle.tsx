import React from 'react'
import FeaturedArticlePreview from './FeaturedArticlePreview';
import FeaturedArticleFull from './FeaturedArticleFull';
import { AnimatePresence, motion, Spring } from "framer-motion";
import type { AppProps } from "next/app";

interface FeaturedArticleProps extends AppProps{
  readMore: boolean;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({readMore, Component, pageProps, router}) => {

  return (
    <AnimatePresence initial={false} mode="popLayout">
    {readMore ? 
      <FeaturedArticleFull/> : 
      <FeaturedArticlePreview/>
    }
    </AnimatePresence>
  )
}

export default FeaturedArticle