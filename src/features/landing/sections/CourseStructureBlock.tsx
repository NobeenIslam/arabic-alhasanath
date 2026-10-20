'use client';

import Script from 'next/script';
import React from 'react';
import { componentIds } from '@/features/landing/content';
import { FadeUpWrapper } from '@/components/blocks/FadeUpWrapper';
import type { CourseStructureContent } from '@/features/landing/types';

const CourseStructureBlock = ({
  title,
  wistiaVideoId,
}: CourseStructureContent) => {
  return (
    <section
      className="gutter bg-specialBackgroundGreen"
      id={componentIds.courseStructureBlock}
      aria-labelledby="course-structure-title"
    >
      <FadeUpWrapper className="mx-auto max-w-7xl">
        <h2
          className="mb-12 text-left text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          id="course-structure-title"
        >
          {title}
        </h2>
        <div
          className="wistia_responsive_padding"
          style={{ padding: '50.0% 0 0 0', position: 'relative' }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          >
            <span
              className={`wistia_embed wistia_async_${wistiaVideoId} popover=true videoFoam=true`}
              style={{
                display: 'inline-block',
                height: '100%',
                position: 'relative',
                width: '100%',
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </FadeUpWrapper>
      <Script
        src={`https://fast.wistia.com/embed/medias/${wistiaVideoId}.jsonp`}
        async
      />
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" async />
    </section>
  );
};

export { CourseStructureBlock };
