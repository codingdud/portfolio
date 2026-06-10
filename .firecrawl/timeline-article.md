[Sitemap](https://medium.com/sitemap/sitemap.xml)

[Open in app](https://play.google.com/store/apps/details?id=com.medium.reader&referrer=utm_source%3DmobileNavBar&source=post_page---top_nav_layout_nav-----------------------------------------)

Sign up

[Sign in](https://medium.com/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F%40daxgama%2Fscroll-linked-timeline-animation-with-framer-motion-d868b6b72f99&source=post_page---top_nav_layout_nav-----------------------global_nav------------------)

[Medium Logo](https://medium.com/?source=post_page---top_nav_layout_nav-----------------------------------------)

Get app

[Write](https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2Fnew-story&source=---top_nav_layout_nav-----------------------new_post_topnav------------------)

[Search](https://medium.com/search?source=post_page---top_nav_layout_nav-----------------------------------------)

Sign up

[Sign in](https://medium.com/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F%40daxgama%2Fscroll-linked-timeline-animation-with-framer-motion-d868b6b72f99&source=post_page---top_nav_layout_nav-----------------------global_nav------------------)

![Unknown user](https://miro.medium.com/v2/resize:fill:32:32/1*dmbNkD5D-u45r44go_cf0g.png)

# **Scroll Linked Timeline Animation with React and Framer Motion**

[![Daxesh Vadgama](https://miro.medium.com/v2/resize:fill:32:32/1*F8hhRbIHOGHel3nzAhYLpg.jpeg)](https://medium.com/@daxgama?source=post_page---byline--d868b6b72f99---------------------------------------)

[Daxesh Vadgama](https://medium.com/@daxgama?source=post_page---byline--d868b6b72f99---------------------------------------)

Follow

3 min read

·

Jul 30, 2023

76

[Listen](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2Fplans%3Fdimension%3Dpost_audio_button%26postId%3Dd868b6b72f99&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40daxgama%2Fscroll-linked-timeline-animation-with-framer-motion-d868b6b72f99&source=---header_actions--d868b6b72f99---------------------post_audio_button------------------)

Share

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1000/1*JcphqYmZRA9hZJEQbMdFLg.gif)

In the ever-evolving landscape of web design, scroll-linked animations and scroll-triggered animations have emerged as powerful tools for crafting immersive and dynamic user experiences.

Scroll-linked animations involve a seamless connection between scroll progress and the progression of an animation, ensuring that visuals unfold in perfect harmony with the user’s scrolling actions.

You will need an intermediate level of knowledge of React & Framer Motion. I will omit some parts of the code for brevity and assume you already know how to set up a React application with Framer Motion.

> Framer Motion is a simple yet powerful motion library for React.
>
> It powers the amazing animations and interactions in Framer, the web builder for creative pros. Zero code, maximum speed.

## **How it works?**

When we sync animation timeline to scroll, the progress of the animation is directly tied to the user’s scroll progress. For example timeline that spans 2.5 seconds.

At the start of the animation, which is at 0% scroll progress, the animation will be at 0 seconds on the timeline. As the user scrolls down the page, reaching the midway point (50% scroll progress), the animation will progress to 1.25 seconds on the timeline.

When the user reaches 100% scroll progress (scrolling to the end of the page), the animation will be at its final point on the timeline, which is 2.5 seconds.

In essence, the scroll progress linearly corresponds to the animation’s timeline progress.

## Lets Dive Deep into Code.

**Step 1: Creating the Animation Timeline**

To begin, let’s create our animation timeline using the `animate()` function. `animate()` return `AnimationPlaybackControls` that allows us to control the playback of the animation. We will also store a reference of the animation controls for later use

```
const animControls = useRef<AnimationPlaybackControls>();

useEffect(() => {
  animControls.current = animate([\
    // Animation timeline\
  ]);
}, []);
```

**Step 2: Listening to Scroll Events**

## Get Daxesh Vadgama’s stories in your inbox

Join Medium for free to get updates from this writer.

Subscribe

Subscribe

Remember me for faster sign in

We need to listen for scroll events to keep track of the user’s scrolling progress. We’ll use the `useScroll()` to achieve this.

```
useScroll().scrollYProgress.on('change', (yProgress) => {

})
```

**Step 3: Synchronizing Scroll with Animation**

The magic happens here! We’ll link the scroll progress to the animation timeline by updating the animation time whenever the user scrolls.

```
useScroll().scrollYProgress.on('change', (yProgress) => {
  // Ensure the animation controls exist
  if (!animControls.current) return;

  // Calculate the new time for the animation based on scroll progress
  animControls.current.time = yProgress * animControls.current.duration;
});
```

The `yProgress` variable is a value between 0 and 1, representing the user's scrolling progress. By multiplying it with the total animation duration, which is 2.5 seconds in this case, we map the scrolling range to match the duration of the animation.

**The Final Touch**: Preventing Automatic Animation Playback

To prevent the animation from playing automatically when created, we simply pause it immediately after creating it.

```
useEffect(() => {
  animControls.current = animate([\
    // Animation timeline\
  ]);
  animControls.current.pause();
}, []);
```

With these easy-to-follow steps, you now have the power to create captivating animations that respond smoothly to the user’s scrolling actions. Experiment with different keyframes and options to achieve the perfect animation for your website or application.

Now it’s your turn to bring your designs to life with scroll-controlled animations! Happy coding and have fun unleashing your creativity!

## Demo

Here’s an absolutely incredible example of the sheer magic you can achieve with scroll-linked timeline animations!

Explore this technique in use with captivating text animations at [https://animated-text.framer.website/](https://animated-text.framer.website/)

If you’ve enjoyed this article and want to explore more of my work. Check out my work at [http://aframe.studio](http://aframe.studio/)/.

Happy hacking!

[Animation](https://medium.com/tag/animation?source=post_page-----d868b6b72f99---------------------------------------)

[Scroll Linked](https://medium.com/tag/scroll-linked?source=post_page-----d868b6b72f99---------------------------------------)

[Framer Motion](https://medium.com/tag/framer-motion?source=post_page-----d868b6b72f99---------------------------------------)

[React](https://medium.com/tag/react?source=post_page-----d868b6b72f99---------------------------------------)

[Typescript](https://medium.com/tag/typescript?source=post_page-----d868b6b72f99---------------------------------------)

76

76

[![Daxesh Vadgama](https://miro.medium.com/v2/resize:fill:48:48/1*F8hhRbIHOGHel3nzAhYLpg.jpeg)](https://medium.com/@daxgama?source=post_page---post_author_info--d868b6b72f99---------------------------------------)

[![Daxesh Vadgama](https://miro.medium.com/v2/resize:fill:64:64/1*F8hhRbIHOGHel3nzAhYLpg.jpeg)](https://medium.com/@daxgama?source=post_page---post_author_info--d868b6b72f99---------------------------------------)

Follow

[**Written by Daxesh Vadgama**](https://medium.com/@daxgama?source=post_page---post_author_info--d868b6b72f99---------------------------------------)

[5 followers](https://medium.com/@daxgama/followers?source=post_page---post_author_info--d868b6b72f99---------------------------------------)

· [2 following](https://medium.com/@daxgama/following?source=post_page---post_author_info--d868b6b72f99---------------------------------------)

Web Designer & Developer

Follow

[Help](https://help.medium.com/hc/en-us?source=post_page-----d868b6b72f99---------------------------------------)

[Status](https://status.medium.com/?source=post_page-----d868b6b72f99---------------------------------------)

[About](https://medium.com/about?autoplay=1&source=post_page-----d868b6b72f99---------------------------------------)

[Careers](https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e?source=post_page-----d868b6b72f99---------------------------------------)

[Press](mailto:pressinquiries@medium.com)

[Blog](https://blog.medium.com/?source=post_page-----d868b6b72f99---------------------------------------)

[Store](https://medium.com/store)

[Privacy](https://policy.medium.com/medium-privacy-policy-f03bf92035c9?source=post_page-----d868b6b72f99---------------------------------------)

[Rules](https://policy.medium.com/medium-rules-30e5502c4eb4?source=post_page-----d868b6b72f99---------------------------------------)

[Terms](https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post_page-----d868b6b72f99---------------------------------------)

[Text to speech](https://speechify.com/medium?source=post_page-----d868b6b72f99---------------------------------------)

reCAPTCHA

Recaptcha requires verification.

protected by **reCAPTCHA**