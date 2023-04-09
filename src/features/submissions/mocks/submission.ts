import { Submission, SubmissionStatus } from '../types/submission';

export const mockedSubmissions: Submission[] = [
  {
    id: '1a918639-ebf2-436a-a7ae-2f4f758c9952',
    imageUrl:
      'https://eldiariony.com/wp-content/uploads/sites/2/2022/09/Queso-fresco-shutterstock_1842968164.jpg?quality=75&strip=all&w=1200&h=800&crop=1',
    status: SubmissionStatus.PENDING,
    userId: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
    recipeId: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
    createdAt: '2023-03-28T03:17:44.175Z',
    updatedAt: '2023-03-28T03:17:44.175Z',
    deletedAt: null,
    user: {
      id: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
      nickName: null,
      name: 'John Doe',
    },
    recipe: {
      id: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
      name: 'Another Example Recipe',
      imageUrl: 'https://example.com/another-recipe-image.jpg',
    },
    votes: [],
  },
  {
    id: '4017d365-09a3-4f4f-a52e-f1414da0d39b',
    imageUrl: 'https://thumbs.dreamstime.com/b/pan-largo-del-pan-22826883.jpg',
    status: SubmissionStatus.REJECTED,
    userId: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
    recipeId: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
    createdAt: '2023-03-22T03:00:39.572Z',
    updatedAt: '2023-03-22T03:14:47.116Z',
    deletedAt: null,
    user: {
      id: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
      nickName: null,
      name: 'John Doe',
    },
    recipe: {
      id: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
      name: 'Another Example Recipe',
      imageUrl: 'https://example.com/another-recipe-image.jpg',
    },
    votes: [
      {
        id: 'bd302f8e-3aa8-4080-adad-983c9570d1ba',
        isUpvote: false,
      },
      {
        id: '4de7c6d3-938b-4418-b2bc-87ec57c6c505',
        isUpvote: false,
      },
      {
        id: '4d520496-bbe3-468d-9c79-b47e84d8a4e5',
        isUpvote: false,
      },
      {
        id: 'e08c41f3-936d-4aaf-889f-ff3366bafa2a',
        isUpvote: false,
      },
      {
        id: '07a74f59-dc68-40e3-8267-a9248dbef424',
        isUpvote: false,
      },
      {
        id: 'b4f9717e-ce90-48cf-af09-933e9a459c91',
        isUpvote: false,
      },
      {
        id: '71246a6a-91be-4112-a08c-7ef25d048d29',
        isUpvote: false,
      },
      {
        id: '8e769d54-7469-45ea-b1f5-d550bb391867',
        isUpvote: false,
      },
      {
        id: '13217085-8921-4283-b06f-bae7aab556b3',
        isUpvote: false,
      },
      {
        id: 'aafec21d-b170-4e39-ad65-ae135e952583',
        isUpvote: false,
      },
      {
        id: 'c63186ee-b2b4-442d-bac7-dc3db868662c',
        isUpvote: false,
      },
      {
        id: '4fadd1c9-15ac-4cf9-9788-c41a599dde14',
        isUpvote: true,
      },
      {
        id: '3e2f4b4d-ba67-4b26-a916-71954620e893',
        isUpvote: true,
      },
      {
        id: 'ef12e4fd-0660-484f-afef-27260302bb37',
        isUpvote: true,
      },
      {
        id: '9b7f46c3-d047-473a-872e-4442cfb1c806',
        isUpvote: true,
      },
      {
        id: '8ef44566-d7ff-4d2e-9330-201a8dbd8a32',
        isUpvote: true,
      },
    ],
  },
  {
    id: '5703026f-3c6b-4965-b94e-3e04e73ef157',
    imageUrl: 'https://thumbs.dreamstime.com/b/pan-largo-del-pan-22826883.jpg',
    status: SubmissionStatus.REJECTED,
    userId: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
    recipeId: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
    createdAt: '2023-03-22T03:00:39.572Z',
    updatedAt: '2023-03-22T03:00:39.572Z',
    deletedAt: null,
    user: {
      id: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
      nickName: null,
      name: 'John Doe',
    },
    recipe: {
      id: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
      name: 'Another Example Recipe',
      imageUrl: 'https://example.com/another-recipe-image.jpg',
    },
    votes: [
      {
        id: '72962902-9bde-4fa5-a0b8-117312206042',
        isUpvote: false,
      },
    ],
  },
  {
    id: '7cce4481-d5b3-4000-9e05-ae81697876ab',
    imageUrl: 'https://thumbs.dreamstime.com/b/pan-largo-del-pan-22826883.jpg',
    status: SubmissionStatus.PENDING,
    userId: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
    recipeId: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
    createdAt: '2023-03-31T04:07:34.799Z',
    updatedAt: '2023-03-31T04:07:34.799Z',
    deletedAt: null,
    user: {
      id: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
      nickName: null,
      name: 'John Doe',
    },
    recipe: {
      id: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
      name: 'Another Example Recipe',
      imageUrl: 'https://example.com/another-recipe-image.jpg',
    },
    votes: [],
  },
  {
    id: '89946995-7392-4bd4-9ed0-8dabe5eb864e',
    imageUrl:
      'https://twoplaidaprons.com/wp-content/uploads/2022/12/ratatouille-baked-in-copper-pan-thumbnail.jpg',
    status: SubmissionStatus.PENDING,
    userId: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
    recipeId: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
    createdAt: '2023-03-31T04:07:35.876Z',
    updatedAt: '2023-03-31T04:07:35.876Z',
    deletedAt: null,
    user: {
      id: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
      nickName: null,
      name: 'John Doe',
    },
    recipe: {
      id: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
      name: 'Another Example Recipe',
      imageUrl: 'https://example.com/another-recipe-image.jpg',
    },
    votes: [],
  },
  {
    id: 'b699c57e-f3d5-405c-b35b-72cbf913afcd',
    imageUrl: 'https://thumbs.dreamstime.com/b/pan-largo-del-pan-22826883.jpg',
    status: SubmissionStatus.PENDING,
    userId: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
    recipeId: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
    createdAt: '2023-03-28T03:17:50.179Z',
    updatedAt: '2023-03-28T03:17:50.179Z',
    deletedAt: null,
    user: {
      id: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
      nickName: null,
      name: 'John Doe',
    },
    recipe: {
      id: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
      name: 'Another Example Recipe',
      imageUrl: 'https://example.com/another-recipe-image.jpg',
    },
    votes: [],
  },
  {
    id: 'dc9fc192-732f-4251-a678-a22a68bd8233',
    imageUrl:
      'https://eldiariony.com/wp-content/uploads/sites/2/2022/09/Queso-fresco-shutterstock_1842968164.jpg?quality=75&strip=all&w=1200&h=800&crop=1',
    status: SubmissionStatus.PENDING,
    userId: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
    recipeId: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
    createdAt: '2023-03-31T04:07:33.709Z',
    updatedAt: '2023-03-31T04:07:33.709Z',
    deletedAt: null,
    user: {
      id: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
      nickName: null,
      name: 'John Doe',
    },
    recipe: {
      id: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
      name: 'Another Example Recipe',
      imageUrl: 'https://example.com/another-recipe-image.jpg',
    },
    votes: [],
  },
  {
    id: 'e8cb51f8-7335-4e85-9473-3aa480fe6010',
    imageUrl:
      'https://twoplaidaprons.com/wp-content/uploads/2022/12/ratatouille-baked-in-copper-pan-thumbnail.jpg',
    status: SubmissionStatus.APPROVED,
    userId: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
    recipeId: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
    createdAt: '2023-03-22T03:00:39.572Z',
    updatedAt: '2023-03-22T03:31:07.864Z',
    deletedAt: null,
    user: {
      id: '4b3f4191-b075-4124-aacb-b187eecf5c3e',
      nickName: null,
      name: 'John Doe',
    },
    recipe: {
      id: '61e2266c-dcf6-4a2a-8776-68c93b306c22',
      name: 'Another Example Recipe',
      imageUrl: 'https://example.com/another-recipe-image.jpg',
    },
    votes: [
      {
        id: 'cffe66ca-8f83-4a6f-a286-a538c016f85d',
        isUpvote: true,
      },
      {
        id: 'f9240d03-697a-4f17-b0e9-cca5bd2339f3',
        isUpvote: true,
      },
      {
        id: '73ee9b89-3cc6-47b3-9eaf-280a9934eba0',
        isUpvote: true,
      },
      {
        id: 'f4cbaa86-b031-44ca-b8c5-f6985d0afbdb',
        isUpvote: true,
      },
      {
        id: 'fa44e098-3bf7-4079-97ba-f37f51c1403d',
        isUpvote: true,
      },
    ],
  },
];
