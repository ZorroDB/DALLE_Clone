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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ante tellus, ac congue turpis mattis quis. Donec scelerisque laoreet porttitor. Nulla vel augue quis massa mollis porttitor. Aenean dui massa, aliquam eget ipsum non, blandit placerat ligula. Curabitur hendrerit est a euismod faucibus. Sed eget erat accumsan, tristique lectus a, faucibus sem. Praesent tincidunt dolor ut ipsum fringilla mattis. Maecenas faucibus, diam eu vehicula volutpat, sapien tortor ultrices arcu, sit amet auctor ante nisi eu odio. Etiam pulvinar turpis nec egestas ornare. Cras id tellus eros. Vivamus egestas ipsum elit. Curabitur convallis tristique eros, ac egestas ipsum fermentum vitae. Sed nec nisl lacinia, mattis mauris vitae, dictum neque.</p>
        </div>
      </div>
      <div className="row">
        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ante tellus, ac congue turpis mattis quis. Donec scelerisque laoreet porttitor. Nulla vel augue quis massa mollis porttitor. Aenean dui massa, aliquam eget ipsum non, blandit placerat ligula. Curabitur hendrerit est a euismod faucibus. Sed eget erat accumsan, tristique lectus a, faucibus sem. Praesent tincidunt dolor ut ipsum fringilla mattis. Maecenas faucibus, diam eu vehicula volutpat, sapien tortor ultrices arcu, sit amet auctor ante nisi eu odio. Etiam pulvinar turpis nec egestas ornare. Cras id tellus eros. Vivamus egestas ipsum elit. Curabitur convallis tristique eros, ac egestas ipsum fermentum vitae. Sed nec nisl lacinia, mattis mauris vitae, dictum neque.</p>
        </div>
        <div className="image">
          <img src="https://static.designboom.com/wp-content/uploads/2022/06/dalle-2-ai-system-designboom-02.gif" style={{borderRadius: 40}} alt="your-image-alt" />
        </div>
      </div>
    </div>
    
  );
};
const footer = () => {
  return(
    <div className='footer'>
      <p>Created by Diego</p>
    </div>
  )
}

export default MyPage;