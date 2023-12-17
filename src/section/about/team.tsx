'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/animations/section.animation';

const Team = () => {
  const team = [
    {
      avatar:
        'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      name: 'Martiana dialan',
      title: 'Product designer',
    },
    {
      avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      name: 'Micheal colorand',
      title: 'Software engineer',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'Brown Luis',
      title: 'Full stack engineer',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      name: 'Lysa sandiago',
      title: 'Head of designers',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Daniel martin',
      title: 'Product designer',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Vicky tanson',
      title: 'Product manager',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
      name: 'Nilson kalin',
      title: 'DevOp engineer',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Tina watersone',
      title: 'Brand designer',
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className='py-14'>
      <div className='mx-auto max-w-screen-xl px-4 text-center md:px-8'>
        <SectionWrapper  visible={true}>
          <div className='mx-auto max-w-xl'>
            <motion.h3
              className='text-3xl font-semibold text-gray-800 sm:text-4xl'
              variants={itemVariants}
            >
              Meet our team
            </motion.h3>
            <motion.p className='mt-3 text-gray-600' variants={itemVariants}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </motion.p>
          </div>
        </SectionWrapper>
        <motion.div className='mt-12' variants={itemVariants}>
          <ul className='grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {team.map((item, idx) => (
              <SectionWrapper
                key={idx}
                delay={parseFloat(`0.${idx}`)}
                visible={true}
              >
                <motion.li variants={itemVariants}>
                  <div className='mx-auto h-20 w-20'>
                    <img
                      src={item.avatar}
                      className='h-full w-full rounded-full'
                      alt=''
                    />
                  </div>
                  <div className='mt-2'>
                    <motion.h4
                      className='font-semibold text-gray-700 sm:text-lg'
                      variants={itemVariants}
                    >
                      {item.name}
                    </motion.h4>
                    <motion.p className='text-pink-600' variants={itemVariants}>
                      {item.title}
                    </motion.p>
                  </div>
                </motion.li>
              </SectionWrapper>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
