import React from 'react';
import Post from './Post/Post';
import './PostPage.scss'

const PostsPage = () => {

   return (
      <section className='section__posts posts'>
         <div className='posts__container'>
            <Post author={{
               name: 'Roman Demchuk',
               photo: "https://abrakadabra.fun/uploads/posts/2022-03/1647010766_2-abrakadabra-fun-p-na-zastavku-telefona-dlya-muzhchin-serezni-2.jpg",
               nickname: '@R.Dem',
            }}
               content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! "
               data='13 липня 16:25' />
            <Post author={{
               name: 'Alina Popova',
               photo: "https://rus-pic.ru/wp-content/uploads/2021/09/44cfe033c917eba529ea672890bb381c.jpg",
               nickname: '@A.P.',
            }}
               content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! "
               data='13 липня 18:01' />
            <Post author={{
               name: 'Olena',
               photo: "https://mobimg.b-cdn.net/v3/fetch/69/69b50955590aeeaa5603134cf210db8f.jpeg",
               nickname: '@OllO',
            }}
               content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! "
               data='14 липня 00:45' />
            <Post author={{
               name: 'Ivan Y.',
               photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JBtyLYKPa4oh1jlPyiRXf7DsRKwaFxEE1w&usqp=CAU",
               nickname: '@IvaN',
            }}
               content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! "
               data='15 липня 05:15' />
            <Post author={{
               name: 'Oleg',
               photo: "https://mobimg.b-cdn.net/v3/fetch/90/90a05893741479df2aaa0d707a0ad957.jpeg",
               nickname: '@Oleg',
            }}
               content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur accusamus animi ipsam a ratione. Minima, laboriosam impedit dolores natus fuga odit id delectus eius exercitationem ratione numquam ut praesentium sint! "
               data='16 липня 17:56' />
         </div>
      </section>
   );
};

export default PostsPage;