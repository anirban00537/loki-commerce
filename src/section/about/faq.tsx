'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Faq = () => {
  const faqsList = [
    {
      label: 'Payment',
      qas: [
        {
          q: 'What are some random questions to ask?',
          a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
        },
        {
          q: 'Do you include common questions?',
          a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
        },
      ],
    },
    {
      label: 'Delivery and Shipping',
      qas: [
        {
          q: 'How long does it take for my order to be delivered?',
          a: 'Delivery times vary depending on your location and the shipping method selected. You can check the estimated delivery time during the checkout process or in your order confirmation email.',
        },
        {
          q: 'Do you offer international shipping?',
          a: 'Yes, we offer international shipping to several countries. During the checkout process, you can select your country to see if we deliver to your location and the associated shipping costs.',
        },
        {
          q: 'How can I change my shipping address after placing an order?',
          a: 'To change your shipping address, please contact our customer support as soon as possible. Changes may be possible if the order has not been shipped yet.',
        },
      ],
    },
    {
      label: 'Account',
      qas: [
        {
          q: 'Can I use this for 21 questions?',
          a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
        },
        {
          q: 'Are these questions for girls or for boys?',
          a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).',
        },
        {
          q: 'What do you wish you had more talent doing?',
          a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
        },
      ],
    },
    {
      label: 'License',
      qas: [
        {
          q: "What's something that was completely out-of-character that you did?",
          a: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
      ],
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
    <motion.section
      className='border-b border-t py-16'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='container mx-auto'>
        <motion.h2
          className='mb-8 border-b pb-4 text-center text-3xl font-semibold text-gray-800'
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
          variants={itemVariants}
        >
          {faqsList.map((list, idx) => (
            <motion.div
              key={idx}
              className='rounded-lg border bg-white p-6'
              variants={itemVariants}
            >
              <h3 className='mb-4 text-xl font-semibold text-gray-800'>
                {list.label}
              </h3>
              <ul>
                {list.qas.map((item, idx) => (
                  <li key={idx} className='mb-4'>
                    <motion.details
                      className='cursor-pointer'
                      variants={itemVariants}
                    >
                      <summary className='border-b pb-2 font-semibold text-gray-500'>
                        {item.q}
                      </summary>
                      <motion.p
                        className='mt-2 text-gray-600'
                        variants={itemVariants}
                      >
                        {item.a}
                      </motion.p>
                    </motion.details>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className='mt-8 border-t pt-4 text-center text-gray-600'
          variants={itemVariants}
        >
          Can't find the answer you're looking for?{' '}
          <a
            className='font-semibold text-pink-600 hover:underline'
            href='mailto:support@vorish.com'
          >
            Contact us
          </a>
          .
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Faq;
