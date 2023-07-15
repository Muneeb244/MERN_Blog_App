import React, { } from 'react'
import BlogCard from './BlogCard'
// import Cookies from 'js-cookie'

function Blogs() {

    // useEffect(() => {
    //     let token = Cookies.get("token");
    //     console.log("From blogs",token)
    // })

    const blogs = [{
        id: 1,
        title: 'Unleashing Creativity: A Journey of Self-Discovery',
        littleDescription: 'In a world that constantly demands productivity and efficiency, its easy to overlook the importance of nurturing our creative souls.',
        description: 'In a world that constantly demands productivity and efficiency, its easy to overlook the importance of nurturing our creative souls. However, embracing and unleashing our creativity can lead to transformative experiences and a deeper understanding of ourselves. Join me on a personal journey as we explore the power of creativity and its profound impact on our lives. Creativity is a force that resides within each of us, waiting to be unleashed. It has the ability to break through barriers, challenge conventions, and bring forth innovation. Yet, many of us find ourselves stifled by self-doubt, fear of failure, or simply the demands of everyday life. It is crucial to recognize that creativity is not limited to the arts; it encompasses all aspects of life, from problem-solving to decision-making and everything in between. Through this blog, we will embark on a quest to reconnect with our innate creativity. We will discover how to cultivate an environment that nurtures our creative spirits and find inspiration in the world around us. Along the way, we will explore various techniques, such as brainstorming, journaling, and meditation, that can unlock our creative potential. Moreover, we will delve into the transformative power of embracing failure and learning from it. Failure is not a setback; it is a stepping stone towards growth and innovation. By reframing our perspective on failure, we can overcome the fear of making mistakes and tap into our boundless imagination. Additionally, we will explore the benefits of collaboration and the collective genius that emerges when diverse minds come together. Sharing ideas, receiving feedback, and engaging in meaningful dialogue can enhance our creative process and lead to breakthrough moments of brilliance. Throughout this journey, we will also celebrate the joy of creation itself. Creativity is not solely focused on the end result; it is about the process of discovery, exploration, and self-expression. Whether its painting, writing, dancing, or any other creative endeavor, we will discover the sheer bliss that accompanies the act of bringing something new into existence. So, lets embark on this adventure together. Lets unlock our creative potential, embrace the unknown, and celebrate the beauty of self-expression. By embracing our creativity, we open the doors to endless possibilities and embark on a path of self-discovery that can enrich our lives in ways we never imagined. Get ready to unleash your creativity and embark on a journey that will forever change the way you perceive yourself and the world around you.',
        author: 'Emma Thompson',
        date: '2023-07-13 11:03:00',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4gTmuRlT-uOjnp_L5IJneg@2x.jpeg',
    },

    {
        id: 2,
        title: 'The Power of Positive Thinking: Transforming Your Life One Thought',
        littleDescription: 'Positive thinking is a mental attitude in which you expect good and favorable results. In other words, positive thinking is the process of creating thoughts that create and transform energy into reality.',
        description: 'Positive thinking is a mental attitude in which you expect good and favorable results. In other words, positive thinking is the process of creating thoughts that create and transform energy into reality. A positive mind waits for happiness, health and a happy ending in any situation. More people become attracted to this notion, a good evidence is the increasingly courses and books about it. Positive thinking is gaining popularity among us. More and more successful people will tell you that they got where they are now because they made a lifestyle around positive thinking. A person that faces life with a positive attitude will always be more successful in life both professionally and personally, than a person that can not take control of his thoughts. Positive thinking can be defined as thinking good thoughts or being optimistic. Positive thinking is very helpful to me because it helps me to cope with the stress of being a student.',
        author: 'Sophia Johnson',
        date: '2023-03-13 07:43:00',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*ecTKuneiXwjs82VA.jpg',
    },
    {
        id: 3,
        title: "The Mindful Path: Cultivating Inner Peace in a Chaotic World",
        littleDescription: "Discover the transformative power of mindfulness and unlock inner peace amidst life's chaos.",
        description: "In a fast-paced and chaotic world, finding inner peace can seem like an elusive goal. However, the key to tranquility lies within each of us, waiting to be discovered. Join me on a journey of mindfulness as we explore the transformative power of being present and cultivating inner peace. Mindfulness is the practice of bringing our attention to the present moment with non-judgmental awareness. By learning to observe our thoughts, emotions, and sensations without attachment, we can break free from the grips of stress, anxiety, and discontentment. Through this blog, we will delve into various mindfulness techniques that can help us navigate the challenges of daily life and find solace amidst the chaos. We will explore mindful breathing exercises, meditation practices, and ways to integrate mindfulness into our daily routines. Moreover, we will uncover the profound impact of mindfulness on our mental, emotional, and physical well-being. Scientific research has shown that regular mindfulness practice can reduce stress, improve focus and concentration, enhance emotional resilience, and promote overall happiness. By incorporating mindfulness into our lives, we develop a deeper connection with ourselves and the world around us. We become more attuned to our needs, desires, and values, leading to a greater sense of purpose and fulfillment. Along this mindful path, we will also learn to cultivate self-compassion and embrace imperfections. Mindfulness teaches us to be kind and gentle towards ourselves, letting go of self-criticism and embracing self-acceptance. We will explore the importance of self-care and prioritize nurturing our physical, mental, and emotional well-being. Remember, mindfulness is not about achieving a state of perpetual bliss but rather about embracing each moment with curiosity and openness. It is about finding peace amidst the ups and downs of life and savoring the beauty of each experience, whether pleasant or challenging. So, let's embark on this mindful journey together. Let's cultivate inner peace, presence, and a deeper connection with ourselves and the world around us. By practicing mindfulness, we can transform our lives, one breath at a time, and create a sanctuary of calmness within ourselves. Get ready to embrace the power of the present moment and embark on a path that will forever change the way you experience life.",
        author: "Sophia Johnson",
        date: "2023-07-03 00:03:00",
        image: "https://hips.hearstapps.com/hmg-prod/images/woman-meditation-on-an-ocean-side-rock-royalty-free-image-1616630391.?crop=1xw:0.74993xh;center,top&resize=640:*"
    }
    ]
    return (

        <div className='flex flex-col w-full h-screen items-center my-5'>
            {blogs.map(blogs => (
                <BlogCard key={blogs.id} image={blogs.image} title={blogs.title} description={blogs.description} littleDescription={blogs.littleDescription} author={blogs.author} date={blogs.date} />
            ))}
        </div>
    )
}

export default Blogs