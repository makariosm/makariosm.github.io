import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BackgroundContent.css";

function BackgroundContent() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <div className='slider-container'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="slide-container">
              <div className="slide-title">
                <p className="slide-name">{d.name}</p>
              </div>
              <div className="slide">
                <div className='slide-content'>
                  <div className='slide-image-container'>
                    <img src={d.img} alt="" className="slide-image"/>
                  </div>
                  <div className="slide-text">
                    <p className="slide-review">{d.review}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  const data = [
    {
      name: `Place of Birth`,
      img: `images/Flag_of_Egypt.jpg`,
      review: `I was born in Alexandria, Egypt, a city with a rich history and cultural heritage. As one of the most iconic cities in the Mediterranean, Alexandria has a unique blend of ancient history and modern life. Growing up here, I was immersed in the local Egyptian culture, which has had a profound influence on shaping who I am today.
              Being an immigrant, I've always found myself navigating the delicate balance between my Egyptian roots and the new environments I encountered as I moved. This cultural duality has taught me how to appreciate the nuances of both worlds, while staying grounded in my heritage.
              The sense of family and community that is deeply ingrained in Egyptian culture is something I carry with me to this day. In Alexandria, family is everything, and this value was instilled in me from a young age. Whether it's gathering for meals, celebrations, or simply sharing time together, this bond remains central to my identity.
              I'm also fluent in the Egyptian dialect of Arabic, which connects me further to my heritage and allows me to engage with my roots in a meaningful way. There's something deeply enriching about speaking the language of my birthplace, and it's an essential part of how I express myself.
              One of my greatest joys is traveling back to Alexandria to visit family. Each trip is a reminder of the warmth of home and the importance of staying connected with those I love. Additionally, my fascination with ancient Egypt continues to grow as I explore the history through books, documentaries, and visits to the awe-inspiring sites that shaped one of the most remarkable civilizations in history.
              Alexandria will always hold a special place in my heart, and no matter where life takes me, it remains a source of inspiration, connection, and a reminder of where it all began.`
    },
    {
      name: `Where I Grew Up`,
      img: `images/Uxbridge-Town-Hall-Sign.jpg`,
      review: `I grew up in Uxbridge, MA, a small suburban town where everyone knew everyone, and word traveled fast. The town itself was quiet and typical of suburban life, with a tight-knit community and a school system where I felt the eyes of the town on me at every turn. As an Egyptian immigrant, it was often a challenge to balance my cultural heritage with the desire to fit in with my peers. Over time, I learned to embrace both my Egyptian roots and my American side, using my immigrant experience as an advantage.
              This allowed me to pick and choose the aspects of each culture that would help shape me into the person I wanted to become. One of the things that stands out most about growing up in Uxbridge is the sense of tradition. Every December, the town would come together to celebrate the winter season with a parade, which I always looked forward to. During middle school, I had the privilege of playing saxophone in my school band during the Veteran's Day parade, an experience that gave me a sense of pride in my community.
              My high school soccer field was one of the places I spent a lot of time, practicing the sport I loved while sorting through my thoughts. It was my way of escaping and finding clarity. Alongside soccer, church played a significant role in my life. Though my church and friends were far away from where I lived, the long car rides to and from church became moments of reflection, either with family or on my own. These drives taught me to appreciate quiet moments and gave me space to think about the person I was becoming.
              Growing up in Uxbridge shaped me in many ways, and the small-town atmosphere, combined with my cultural journey, helped me find a balance between my heritage and the world around me.`
    },
    {
      name: `Religion`,
      img: `images/img-coptic-cross.jpg`,
      review: `Religion has always been a cornerstone of my life, particularly my Christian faith in the Coptic Orthodox Church. Growing up, my days were often filled with church activities, whether it was attending traditional services like Mass or engaging in developmental services like hymns class. I spent a lot of time at church, usually multiple days a week, where I found a deep sense of community and connection.
              The way I experienced my faith was also shaped by the significance of certain religious holidays and events. For example, Christmas in the Coptic tradition is celebrated on January 7th, and the week leading up to Easter, known as Pascha Week, holds immense spiritual importance. These holidays were so central to my life that I would always take those days off school to fully participate in the services and traditions.
              While my town of Uxbridge wasn't home to many people who shared my faith, I was fortunate to have friends who were incredibly supportive and respectful of my religious practices. They never pressured me to compromise on my beliefs, and their understanding made it easier to navigate growing up in a different cultural environment.
              Religion also played a key role in bringing my family closer together, as it was such a vital part of our daily lives. Being part of a religious community gave me a sense of purpose and connection to something larger than myself.
              Throughout my journey, I had a couple of teachers who became lifelong friends and mentors. Their guidance on personal, professional, and religious matters has been invaluable, especially since they also navigated life as immigrants.
              My faith continues to be an essential part of my identity, giving me strength and a clear sense of direction. The lessons I've learned through religion, combined with the support of my community and family, have shaped the person I am today.`
    }
  ];
  
  export default BackgroundContent;
  