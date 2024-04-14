/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLoginAttempt = /* GraphQL */ `
  query GetLoginAttempt($id: ID!) {
    getLoginAttempt(id: $id) {
      id
      userId
      successful
      ipAddress
      userAgent
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listLoginAttempts = /* GraphQL */ `
  query ListLoginAttempts(
    $filter: ModelLoginAttemptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoginAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        successful
        ipAddress
        userAgent
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReviewInteractions = /* GraphQL */ `
  query GetReviewInteractions($id: ID!) {
    getReviewInteractions(id: $id) {
      id
      reviewID
      reaction
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReviewInteractions = /* GraphQL */ `
  query ListReviewInteractions(
    $filter: ModelReviewInteractionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviewInteractions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reviewID
        reaction
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewInteractionsByReviewID = /* GraphQL */ `
  query ReviewInteractionsByReviewID(
    $reviewID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewInteractionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewInteractionsByReviewID(
      reviewID: $reviewID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reviewID
        reaction
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReviewReply = /* GraphQL */ `
  query GetReviewReply($id: ID!) {
    getReviewReply(id: $id) {
      id
      description
      ownerName
      reviewID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReviewReplies = /* GraphQL */ `
  query ListReviewReplies(
    $filter: ModelReviewReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviewReplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        ownerName
        reviewID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewRepliesByReviewID = /* GraphQL */ `
  query ReviewRepliesByReviewID(
    $reviewID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewRepliesByReviewID(
      reviewID: $reviewID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        ownerName
        reviewID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReportReview = /* GraphQL */ `
  query GetReportReview($id: ID!) {
    getReportReview(id: $id) {
      id
      reason
      additionalComments
      reviewID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReportReviews = /* GraphQL */ `
  query ListReportReviews(
    $filter: ModelReportReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReportReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reason
        additionalComments
        reviewID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reportReviewsByReviewID = /* GraphQL */ `
  query ReportReviewsByReviewID(
    $reviewID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReportReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reportReviewsByReviewID(
      reviewID: $reviewID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reason
        additionalComments
        reviewID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLocationManager = /* GraphQL */ `
  query GetLocationManager($id: ID!) {
    getLocationManager(id: $id) {
      id
      storyAccess
      userId
      familyName
      givenName
      fullAccess
      locationID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listLocationManagers = /* GraphQL */ `
  query ListLocationManagers(
    $filter: ModelLocationManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocationManagers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storyAccess
        userId
        familyName
        givenName
        fullAccess
        locationID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const locationManagersByLocationID = /* GraphQL */ `
  query LocationManagersByLocationID(
    $locationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLocationManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    locationManagersByLocationID(
      locationID: $locationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storyAccess
        userId
        familyName
        givenName
        fullAccess
        locationID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatGroup = /* GraphQL */ `
  query GetChatGroup($id: ID!) {
    getChatGroup(id: $id) {
      id
      userID
      locationID
      ChatMessages {
        nextToken
        __typename
      }
      lastMessageID
      LastChatMessage {
        id
        senderID
        receiverID
        data
        timeStamp
        isFile
        chatgroupID
        createdAt
        updatedAt
        __typename
      }
      Users {
        items {
          user {
            id
            givenName
            familyName
          }
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatGroupLastChatMessageId
      __typename
    }
  }
`;
export const listChatGroups = /* GraphQL */ `
  query ListChatGroups(
    $filter: ModelChatGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        locationID
        lastMessageID
        createdAt
        updatedAt
        chatGroupLastChatMessageId
        LastChatMessage {
          id
          senderID
          receiverID
          data
          timeStamp
          isFile
          chatgroupID
          createdAt
          updatedAt
          __typename
        }
        Users {
          items {
            user {
              id
              givenName
              familyName
            }
          }
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
      id
      senderID
      receiverID
      data
      timeStamp
      isFile
      chatgroupID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        senderID
        receiverID
        data
        timeStamp
        isFile
        chatgroupID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatMessagesByChatgroupID = /* GraphQL */ `
  query ChatMessagesByChatgroupID(
    $chatgroupID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatMessagesByChatgroupID(
      chatgroupID: $chatgroupID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        senderID
        receiverID
        data
        timeStamp
        isFile
        chatgroupID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getKeywords = /* GraphQL */ `
  query GetKeywords($id: ID!) {
    getKeywords(id: $id) {
      id
      keyword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listKeywords = /* GraphQL */ `
  query ListKeywords(
    $filter: ModelKeywordsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listKeywords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        keyword
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLiveSnap = /* GraphQL */ `
  query GetLiveSnap($id: ID!) {
    getLiveSnap(id: $id) {
      id
      video
      expirationUnixTime
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listLiveSnaps = /* GraphQL */ `
  query ListLiveSnaps(
    $filter: ModelLiveSnapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLiveSnaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        video
        expirationUnixTime
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      gender
      dob
      interests
      cognitoUser
      givenName
      familyName
      myFavourites
      chatgroups {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gender
        dob
        interests
        cognitoUser
        givenName
        familyName
        myFavourites
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      description
      flag
      locationID
      rating
      ownerName
      ReportReviews {
        nextToken
        __typename
      }
      ReviewReplies {
        nextToken
        __typename
      }
      ReviewInteraction {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        flag
        locationID
        rating
        ownerName
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewsByLocationID = /* GraphQL */ `
  query ReviewsByLocationID(
    $locationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByLocationID(
      locationID: $locationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        flag
        locationID
        rating
        ownerName
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      amenities {
        value
        label
        icon
        __typename
      }
      address {
        address
        unit
        city
        country
        state
        postalcode
        __typename
      }
      name
      category
      businessID
      description
      email
      hours {
        open
        startTime
        endTime
        name
        __typename
      }
      images {
        type
        key
        __typename
      }
      phoneNumber
      liveView
      status
      Reviews {
        nextToken
        __typename
      }
      LiveSnap {
        id
        video
        expirationUnixTime
        createdAt
        updatedAt
        owner
        __typename
      }
      latitude
      longitude
      keywords
      locationImage
      isPublished
      social {
        type
        address
        __typename
      }
      searchField
      avgRating
      LocationManagers {
        nextToken
        __typename
      }
      websiteURL
      createdAt
      updatedAt
      locationLiveSnapId
      owner
      __typename
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        businessID
        description
        email
        phoneNumber
        liveView
        status
        latitude
        longitude
        keywords
        locationImage
        isPublished
        searchField
        avgRating
        websiteURL
        createdAt
        updatedAt
        locationLiveSnapId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const locationsByBusinessID = /* GraphQL */ `
  query LocationsByBusinessID(
    $businessID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    locationsByBusinessID(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        category
        businessID
        description
        email
        phoneNumber
        liveView
        status
        latitude
        longitude
        keywords
        locationImage
        isPublished
        searchField
        avgRating
        websiteURL
        createdAt
        updatedAt
        locationLiveSnapId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      description
      address {
        address
        unit
        city
        country
        state
        postalcode
        __typename
      }
      name
      number
      phone
      size
      type
      websiteUrl
      createdDate
      status
      cognitoUser
      Locations {
        nextToken
        __typename
      }
      documents {
        document
        documentType
        __typename
      }
      identityId
      email
      searchField
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        name
        number
        phone
        size
        type
        websiteUrl
        createdDate
        status
        cognitoUser
        identityId
        email
        searchField
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatGroupUser = /* GraphQL */ `
  query GetChatGroupUser($id: ID!) {
    getChatGroupUser(id: $id) {
      id
      chatGroupId
      userId
      chatGroup {
        id
        userID
        locationID
        lastMessageID
        createdAt
        updatedAt
        chatGroupLastChatMessageId
        __typename
      }
      user {
        id
        gender
        dob
        interests
        cognitoUser
        givenName
        familyName
        myFavourites
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listChatGroupUsers = /* GraphQL */ `
  query ListChatGroupUsers(
    $filter: ModelChatGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatGroupUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatGroupId
        userId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatGroupUsersByChatGroupId = /* GraphQL */ `
  query ChatGroupUsersByChatGroupId(
    $chatGroupId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatGroupUsersByChatGroupId(
      chatGroupId: $chatGroupId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatGroupId
        userId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatGroupUsersByUserId = /* GraphQL */ `
  query ChatGroupUsersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatGroupUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatGroupUsersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatGroupId
        userId
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
