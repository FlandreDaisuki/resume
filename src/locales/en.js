const message = {
  docLang: 'en',
  about: {
    title: 'About me',
    paragraph: [
      `I am a front-end engineer that like using web tech to simplify routines.
      My favorite environment is Linux, Firefox and VSCode.
      I built some personal side projects for my hobby and shared source on GitHub,
      then surprisingly got feedbacks and thumbs from communities.`,
      `I usually participate in technical community activities or meetups, such as {coscup}.
      I often learn new knowledge from newsletters like JavaScript Weekly and discuss with others on telegram groups.`,
      `About 5 years experience about web development and JavaScript. My short-term goal is researching the best practice for cross-platform UI development.
      Recently, I am also interested in cloud service, software architecture and DBMS.`,
    ],
  },
  experience: {
    title: 'Experience',
    list: [{
      // https://vue-i18n.intlify.dev/guide/migration/breaking.html#special-character-handling
      header: 'Software Engineer {\'@\'} MiTAC Inc.',
      paragraph: [
        `I cooperated with designers to complete the IOT dashboard ans visualized devices status by {vuetify} and {echarts} in my first task.
        We also tried our best to make it support multiple platforms.
        Then, I rewrote the entire SCADA HMI by {jointjs} almost independently to replace a legacy floor plan component.`,
        `After previous task, I studied Kotlin and finished some services for Spring Boot and deployed to our internal k8s.
        At the same time, I modified {openvino} examples and designed a PoC website that demonstrate the data flow.
        It has finally become a core module in our new project.`,
        `Few weeks later, our leader decided to change back-end architecture to {hasura}.
        I introduced {compositionAPI} and {apollo} to our Vue2 project
        and built up a product management system website to replace the original one.`,
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
    The project is an userscript which crawls website and filters data, made by Vue2 and Rollup.
    It is also the project making me familiar with open source collaboration, git commands and ecosystem of JavaScript.`,
    metablock: `A helper npm package built for {patchouli} development,
    which also receives good feedbacks from other userscript developers.
    {lastWeekDownloads}`,
    dmhy: `Another crawler toy project which is a CLI tool that help me remember which anime episode I've seen.
    It is also my first project to contact and use docker.
    Recently, I self-host {jellyfin} service and can work with this project perfectly.`,
    Facebook: `The {webextension} solve the URL messed up by {code} from Facebook, and remove other tracker parameters.
    It has about 100 users on Firefox.`,
    my: 'Store some useful userscript and usercss for my browser.',
  },
  skills: {
    title: 'Skills',
    web: 'Web Technologies',
    languages: 'Programming Languages',
    others: 'Others',
    naturalLanguages: 'Natural Languages',
    Mandarin: 'Mandarin',
    Japanese: 'Japanese (JLPT N2)',
    English: 'English',
  },
  url: {
    COSCUP: 'https://coscup.org/2020/en',
  },
  lastWeekDownloads: 'Download {count} times last week.',
};

export default message;
