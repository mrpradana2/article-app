import HeroLandingPage from "@/components/home/Hero";
import ListArticle from "@/components/home/Article";

export default function Home() {
  const datas = [
    {
      id: "0ccb3db0-7591-41be-a19f-050d243458da",
      userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
      categoryId: "57e92208-65fb-439e-b912-a47d52e0e2a2",
      title: "15 Best Continuous Integration (CI) Tools for DevOps in 2025",
      content:
        '<p style="text-align: justify">Continuous Integration (CI) automates...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340731-593.png",
      createdAt: "2025-05-30T16:09:45.446Z",
      updatedAt: "2025-05-30T18:01:26.055Z",
      category: {
        id: "57e92208-65fb-439e-b912-a47d52e0e2a2",
        userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
        name: "Technology",
        createdAt: "2025-05-29T16:09:05.278Z",
        updatedAt: "2025-05-29T16:09:05.278Z",
      },
      user: {
        id: "96c0157e-a321-4bb4-b1aa-12c791787f71",
        username: "Admin Naufan",
      },
    },
    {
      id: "1ddc4ec1-8602-42cf-b2b0-161354679bc2",
      userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
      categoryId: "57e92208-65fb-439e-b912-a47d52e0e2a2",
      title: "Top 10 JavaScript Frameworks to Learn in 2025",
      content:
        '<p style="text-align: justify">JavaScript continues to evolve...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340732-594.png",
      createdAt: "2025-05-30T17:10:45.446Z",
      updatedAt: "2025-05-30T19:02:26.055Z",
      category: {
        id: "57e92208-65fb-439e-b912-a47d52e0e2a2",
        userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
        name: "Technology",
        createdAt: "2025-05-29T16:09:05.278Z",
        updatedAt: "2025-05-29T16:09:05.278Z",
      },
      user: {
        id: "96c0157e-a321-4bb4-b1aa-12c791787f71",
        username: "Admin Naufan",
      },
    },
    {
      id: "2eef5fd2-9713-53dg-c3c1-272465780cd3",
      userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
      categoryId: "68f03319-76gc-549f-c423-b58e63f0e3b3",
      title: "The Future of Artificial Intelligence in Healthcare",
      content:
        '<p style="text-align: justify">AI is transforming healthcare...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340733-595.png",
      createdAt: "2025-05-30T18:11:45.446Z",
      updatedAt: "2025-05-30T20:03:26.055Z",
      category: {
        id: "68f03319-76gc-549f-c423-b58e63f0e3b3",
        userId: "96c0157e-a321-4bb4-b1aa-12c791787f71",
        name: "Healthcare",
        createdAt: "2025-05-29T17:10:06.279Z",
        updatedAt: "2025-05-29T17:10:06.279Z",
      },
      user: {
        id: "96c0157e-a321-4bb4-b1aa-12c791787f71",
        username: "Admin Naufan",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
    {
      id: "9iij86g9-9087-09kl-j9j8-999999999z99",
      userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
      categoryId: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
      title: "The Complete Guide to Digital Marketing in 2025",
      content: '<p style="text-align: justify">Digital marketing trends...</p>',
      imageUrl:
        "https://s3.sellerpintar.com/articles/articles/1748621340739-601.png",
      createdAt: "2025-06-01T01:20:45.446Z",
      updatedAt: "2025-06-01T03:12:26.055Z",
      category: {
        id: "9bi3666c-a9jd-88ck-f777-e8a999g9h9i9",
        userId: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        name: "Marketing",
        createdAt: "2025-05-30T00:19:10.287Z",
        updatedAt: "2025-05-30T00:19:10.287Z",
      },
      user: {
        id: "c8d139e0-e5f3-4b8d-9c7a-2f6b1a0d8e7f",
        username: "Marketing Mike",
      },
    },
  ];

  return (
    <div className="grid items-center justify-items-center px-5 md:px-16 font-[family-name:var(--font-archivo)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <HeroLandingPage />
        <ListArticle data={datas} />
      </main>
    </div>
  );
}
