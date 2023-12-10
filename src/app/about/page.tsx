import React from 'react';

const page = () => {
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
  const team = [
    {
      avatar:
        'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
      name: 'Martiana dialan',
      title: 'Product designer',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
      name: 'Micheal colorand',
      title: 'Software engineer',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Brown Luis',
      title: 'Full stack engineer',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Lysa sandiago',
      title: 'Head of designers',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Daniel martin',
      title: 'Product designer',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      name: 'Vicky tanson',
      title: 'Product manager',
    },
  ];

  return (
    <div>
      <section className=' py-14'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='mx-auto max-w-xl text-center'>
            <h3 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>
              Meet Our Amazing Team
            </h3>
            <p className='mt-3 text-gray-600'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>
          </div>
          <div className='mt-12'>
            <ul className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
              {team.map((item, idx) => (
                <li
                  key={idx}
                  className='transform overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:scale-105'
                >
                  <div className='h-60 w-full overflow-hidden sm:h-52 md:h-56'>
                    <img
                      src={item.avatar}
                      className='h-full w-full rounded-t-xl object-cover object-center'
                      alt={item.name}
                    />
                  </div>
                  <div className='p-4'>
                    <h4 className='text-xl font-bold text-gray-900'>
                      {item.name}
                    </h4>
                    <p className='text-gray-600'>{item.title}</p>
                    <div className='mt-4 flex items-center justify-between'>
                      <button className='text-sm text-gray-600 hover:text-indigo-600 focus:outline-none'>
                        View Profile
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className='py-14'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='max-w-lg'>
            <h3 className='mt-3 text-3xl font-extrabold text-gray-800 sm:text-4xl'>
              Some FAQ About Us
            </h3>
            <div className='mt-3 text-gray-600 dark:text-gray-400'>
              <p>
                Can’t find the answer you’re looking for? feel free to{' '}
                <a
                  className='whitespace-nowrap font-semibold text-indigo-600'
                  href='support@floatui.com'
                >
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
          <div className='mt-12 divide-y sm:mt-20'>
            {faqsList.map((list, idx) => (
              <div key={idx} className='gap-x-12 py-5 first:pt-0 sm:flex'>
                <div className='max-w-sm pb-6 pt-8 sm:pt-0 lg:flex-grow'>
                  <h4 className='font-semibold text-gray-500'>{list.label}</h4>
                </div>
                <ul className='flex-1 space-y-6 sm:space-y-8 sm:last:pb-6'>
                  {list.qas.map((item, idx) => (
                    <li key={idx}>
                      <summary className='flex items-center justify-between font-semibold text-gray-700'>
                        {item.q}
                      </summary>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.a }}
                        className='mt-3 leading-relaxed text-gray-600'
                      ></p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
