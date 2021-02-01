import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header } from ".";
import { INavBarProps } from "./MainNavBar";

export default {
  title: "Components/Common/Header",
  component: Header
} as Meta;

const Template: Story<INavBarProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    {
      id: 16,
      name: "About the IMPC",
      classes: "about-impc",
      link: "https://www.mousephenotype.org/about-impc/",
      children: [
        {
          name: "Consortium Members",
          link: "https://www.mousephenotype.org/about-impc/consortium-members/",
          sort: 1,
          children: []
        },
        {
          name: "Collaborations",
          link: "https://www.mousephenotype.org/about-impc/collaborations/",
          sort: 2,
          children: []
        },
        {
          name: "Funding",
          link: "https://www.mousephenotype.org/about-impc/funding/",
          sort: 3,
          children: []
        },
        {
          name: "Animal Welfare",
          link: "https://www.mousephenotype.org/about-impc/animal-welfare/",
          sort: 4,
          children: []
        },
        {
          name: "About KOMP",
          link: "https://www.mousephenotype.org/about-impc/about-komp/",
          sort: 5,
          children: []
        },
        {
          name: "About IKMC",
          link: "https://www.mousephenotype.org/about-impc/about-ikmc/",
          sort: 6,
          children: []
        }
      ]
    },
    {
      id: 2451,
      name: "Data",
      classes: "data",
      link: "https://www.mousephenotype.org/understand/",
      children: [
        {
          name: "COVID-19 Resources",
          link: "https://www.mousephenotype.org/understand/covid-19/",
          sort: 0,
          children: []
        },
        {
          name: "Understanding Our Data",
          link: "https://www.mousephenotype.org/understand/the-data/",
          sort: 0,
          children: [
            {
              name: "How We Generate Our Data",
              link:
                "https://www.mousephenotype.org/understand/the-data/how-we-generate-the-data/"
            },
            {
              name: "Phenotyping Process",
              link:
                "https://www.mousephenotype.org/understand/the-data/phenotyping-process-impress/"
            },
            {
              name: "Allele design",
              link:
                "https://www.mousephenotype.org/understand/the-data/allele-design/"
            },
            {
              name: "Citing IMPC Data",
              link:
                "https://www.mousephenotype.org/understand/the-data/citing-the-impc/"
            }
          ]
        },
        {
          name: "IMPC Data Collections",
          link: "https://www.mousephenotype.org/understand/data-collections/",
          sort: 2,
          children: [
            {
              name: "Embryo Development",
              link:
                "https://www.mousephenotype.org/understand/data-collections/embryo-development/"
            },
            {
              name: "Cardiovascular",
              link:
                "https://www.mousephenotype.org/understand/data-collections/cardiovascular/"
            },
            {
              name: "Pain",
              link:
                "https://www.mousephenotype.org/understand/data-collections/pain/"
            },
            {
              name: "Late Adult Data",
              link:
                "https://www.mousephenotype.org/understand/data-collections/late-adult-data/"
            },
            {
              name: "Histopathology",
              link:
                "https://www.mousephenotype.org/understand/data-collections/histopathology/"
            },
            {
              name: "Essential genes",
              link:
                "https://www.mousephenotype.org/understand/data-collections/essential-genes-portal/"
            }
          ]
        },
        {
          name: "Accessing the Data",
          link: "https://www.mousephenotype.org/understand/accessing-the-data/",
          sort: 3,
          children: [
            {
              name: "Latest Data Release",
              link:
                "https://www.mousephenotype.org/understand/accessing-the-data/latest-data-release/"
            },
            {
              name: "Access via API",
              link:
                "https://www.mousephenotype.org/understand/accessing-the-data/access-via-api/"
            },
            {
              name: "Access via FTP",
              link:
                "https://www.mousephenotype.org/understand/accessing-the-data/access-via-ftp/"
            },
            {
              name: "Batch query",
              link:
                "https://www.mousephenotype.org/understand/accessing-the-data/batch-query/"
            }
          ]
        },
        {
          name: "Advanced Tools",
          link: "https://www.mousephenotype.org/understand/advanced-tools/",
          sort: 3,
          children: [
            {
              name: "IMPReSS",
              link:
                "https://www.mousephenotype.org/understand/advanced-tools/impress/"
            },
            {
              name: "Parallel Coordinates",
              link:
                "https://www.mousephenotype.org/understand/advanced-tools/parallel-coordinates/"
            },
            {
              name: "OpenStats",
              link:
                "https://www.mousephenotype.org/understand/advanced-tools/openstats/"
            },
            {
              name: "iMits",
              link:
                "https://www.mousephenotype.org/understand/advanced-tools/imits/"
            },
            {
              name: "PhenoDCC Tools",
              link:
                "https://www.mousephenotype.org/understand/advanced-tools/phenodcc-homepage/"
            }
          ]
        }
      ]
    },
    {
      id: 18,
      name: "Human Diseases",
      classes: "human-diseases",
      link: "https://www.mousephenotype.org/human-diseases/",
      children: []
    },
    {
      id: 7486,
      name: "Publications",
      classes: "publications",
      link: "https://www.mousephenotype.org/publications/",
      children: [
        {
          name: "Latest IMPC Papers",
          link:
            "https://www.mousephenotype.org/publications/latest-impc-papers/",
          sort: 0,
          children: []
        },
        {
          name: "Data Supporting IMPC Papers",
          link:
            "https://www.mousephenotype.org/publications/data-supporting-impc-papers/",
          sort: 1,
          children: [
            {
              name: "Essential Genes - Translating to Other Species",
              link:
                "https://www.mousephenotype.org/publications/data-supporting-impc-papers/essential-genes-linking-to-disease/"
            },
            {
              name: "Essential Genes - Linking to Disease",
              link:
                "https://www.mousephenotype.org/publications/data-supporting-impc-papers/essential-genes-linking-to-disease-2/"
            },
            {
              name: "Genetic Basis for Metabolic Diseases",
              link:
                "https://www.mousephenotype.org/publications/data-supporting-impc-papers/metabolism/"
            },
            {
              name: "Genes Critical for Hearing Identified",
              link:
                "https://www.mousephenotype.org/publications/data-supporting-impc-papers/hearing/"
            },
            {
              name: "Sexual Dimorphism",
              link:
                "https://www.mousephenotype.org/publications/data-supporting-impc-papers/sexual-dimorphism/"
            }
          ]
        },
        {
          name: "Papers Using IMPC Resources",
          link:
            "https://www.mousephenotype.org/publications/papers-using-impc-resources/",
          sort: 2,
          children: []
        }
      ]
    },
    {
      id: 19,
      name: "News",
      classes: "news",
      link: "https://www.mousephenotype.org/news/",
      children: []
    },
    {
      id: 983,
      name: "Blog",
      classes: "blog",
      link: "https://www.mousephenotype.org/blog/",
      children: []
    }
  ]
};
