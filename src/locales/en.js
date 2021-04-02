const message = {
  about: {
    title: 'About me',
    paragraph: [
      `I'm a front-end engineer that like using web tech to simplify routines.
      My favorite environment is Linux, Firefox and VSCode.
      I built some toy projects for my habits and shared source on GitHub, then surprisingly got some feedbacks and thumbs from communities.`,
      `I usually participate in technical community activities or meetups, such as {coscup}.
      I often learn news from newsletters like JavaScript Weekly and discuss with others on telegram groups.`,
      'Recently, I\'m interested in cloud service, UX design, software architecture and DBMS.',
    ],
  },
  experience: {
    title: 'Experience',
    list: [{
      // https://vue-i18n.intlify.dev/guide/migration/breaking.html#special-character-handling
      header: 'Engineer {\'@\'} MiTAC Inc',
      paragraph: [
        'In the first half of the year, I focused on connecting IOT devices and cooperated with designers to complete the dashboard which can visualize device data. And, built up the entire SCADA HMI by {jointjs} almost independently.',
        'After previous task, my ability was trusted by my supervisor and asked me to learn Kotlin and {openvino}, a computer vision machine learning framework. I finished some services for Spring Boot and deployed to our internal k8s.',
        `At the same time, I modified OpenVINO example code and designed a PoC (Proof of Concept) website that demonstrate
        the data flow between back-end and front-end, created some scripts for automatic deployment as well.
        This finally becomes a core module in our new project.`,
        `In mid-February, We changed back-end architecture to {hasura}, then used Apollo client and GraphQL to front-end,
        and imported {compositionAPI} to our Vue2 project. I also shared Composition API implementation technique to team members.`,
      ],
    }, {
      header: 'Self-taught JavaScript',
      paragraph: [
        `The research field during the master's class is Physical-Based Offline Rendering in Computer Graphics.
        Compared with Realtime Rendering, most of the time is waiting for the calculation result, so there is more time to study other fields.`,
        'At that time, {electron} using web technology to package it into a desktop program gave me great motivation to dig into web technology.',
      ],
    }],
  },
  education: {
    title: 'Education',
    Master: 'Master of Institute of Multimedia Engineering, NCTU',
    Bachelor: 'Bachelor of Computer Science and Information Engineering, NTNU',
  },
  works: {
    title: 'Works',
    Patchouli: `This is the largest project completed during the master's class and get the largest number of stars in GitHub.
    The project is an userscript which crawls website and filters data, made by Vue2 and rollup.
    It is also the project make me familiar with cooperation open source with others, git commands and ecosystem of JavaScript.`,
    metablock: `A helper npm package is built for {patchouli} development,
    which also receives good feedbacks from userscript developers.
    {lastWeekDownloads}`,
    dmhy: `Another crawler toy project which is a CLI tool that help me remember which anime episode I've seen.
    It is also my first project to contact and use docker.
    Recently, I host {jellyfin} service and can work with this project perfectly.`,
    Facebook: `The {webextension} solve Facebook's {code} messed up URL, and other tracker parameters.
    It has about 100 users on Firefox.`,
    my: 'Store some useful userscript and usercss for my browser.',
  },
  skills: {
    title: 'Skills',
    web: 'Web Technologies',
    languages: 'Programming Language',
    others: 'Others',
  },
  url: {
    COSCUP: 'https://coscup.org/2020/en',
  },
  lastWeekDownloads: 'Download {count} times last week.',
};

export default message;
