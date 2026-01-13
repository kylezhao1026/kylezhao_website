// src/content/profile.ts

export const profile = {
  name: "Kyle Zhao",

  headline: "Kyle Zhao",

  tagline: "Learning about artificial intelligence to better our lives.",

  bio: `
Undergraduate data science student at the University of California, San Diego.
Proficient in Python, SQL, and statistical analysis, with hands-on experience in machine learning,
data visualization, and hypothesis testing.

Previous projects include analyzing data from episodes of the sitcom Friends to design predictive
models and explore natural language processing, as well as building a convolutional neural network
to classify images. Beyond technical work, I have experience in leadership, mentoring, and planning
as a camp counselor and self-employed tennis coach.
  `.trim(),

  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Applied Statistics",
    "Natural Language Processing",
    "Human-Centered AI",
    "Data Visualization",
  ],

  skills: {
    languages: ["Python", "SQL", "TypeScript"],
    frameworks: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
    tools: ["Matplotlib", "Jupyter", "Git", "GitHub"],
  },

  links: {
    email: "kyzhao@ucsd.edu",
    github: "https://github.com/kylezhao1026",
    linkedin: "https://www.linkedin.com/in/kyle-zhao-424605261/",
    resumePdf: "/resume.pdf", // replace with your actual resume file
  },

  projects: [
    {
      slug: "friends-reboot-analysis",
      title: 'Utilizing Pandas to Analyze "Friends" for a Reboot',
      description:
        "Exploratory and statistical analysis of the sitcom Friends to identify patterns in viewership, dialogue distribution, and emotional range to inform a potential reboot strategy.",
      impactBullets: [
        "Analyzed episode-level data including directors, writers, and viewership trends",
        "Applied hypothesis testing and regression analysis to examine IMDB ratings and audience patterns",
        "Used NLP techniques to analyze dialogue distribution and generate episode titles in the style of the original show",
      ],
      tech: ["Python", "Pandas", "NLP", "Statistical Analysis", "Regression"],
      links: {
        github: undefined,
        demo: undefined,
      },
      featured: true,
    },

    {
      slug: "diabetes-risk-prediction",
      title: "Diabetes Risk Prediction Using Medical Records",
      description:
        "Built a logistic regression model to predict diabetes onset using medical record data, with a focus on data cleaning, visualization, and interpretability.",
      impactBullets: [
        "Cleaned and preprocessed medical data by handling missing and invalid values",
        "Visualized feature distributions and correlations using histograms and scatter plots",
        "Achieved 75% accuracy on a held-out test dataset using logistic regression",
      ],
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Logistic Regression"],
      links: {
        github: undefined,
        demo: undefined,
      },
      featured: true,
    },

    {
      slug: "cifar10-image-classification",
      title: "Image Classification with CNNs on CIFAR-10",
      description:
        "Collaborated on developing a convolutional neural network to classify images from the CIFAR-10 dataset, focusing on model optimization and performance evaluation.",
      impactBullets: [
        "Implemented and trained a CNN using TensorFlow",
        "Experimented with hyperparameters to optimize validation performance",
        "Achieved 79.74% test accuracy on CIFAR-10 image classification",
      ],
      tech: ["Python", "TensorFlow", "CNNs", "Machine Learning"],
      links: {
        github: undefined,
        demo: undefined,
      },
      featured: false,
    },
  ],
};
