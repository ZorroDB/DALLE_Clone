import React from 'react';
import '/styles/styles.css';

const MyPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="image">
          <img src="https://assets.newatlas.com/dims4/default/1fb1458/2147483647/strip/true/crop/1024x1024+0+0/resize/1024x1024!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F43%2Fed%2Fdc280fe749b694e61562f7597249%2Fdall-e-2-extending-creativity.jpg" style={{borderRadius: 40}} alt="your-image-alt" />
        </div>
        <div className="text">
          <p>I am a solo developer named Diego. I created this project for the exams. I wanted to create this website as I really like to have you guys be able to be more creative and not have restrictions to having to draw everything. Now you can also put in the prompt and search for whatever you desire.</p>
        </div>
      </div>
      <div className="row">
        <div className="text">
          <p>I believe that it's important for people to have a times where they are creative and make a creation themselves completely. This will furthermore also get to know themselves even more and that is one of the beauties in art. And being the one to maybe make people know theirselves better is a great pride.</p>
        </div>
        <div className="image">
          <img src="https://static.designboom.com/wp-content/uploads/2022/06/dalle-2-ai-system-designboom-02.gif" style={{borderRadius: 40}} alt="your-image-alt" />
        </div>
      </div>
      <div className='footer'>
        <p>Created by Diego</p>
      </div>
    </div>
  );
};

export default MyPage;