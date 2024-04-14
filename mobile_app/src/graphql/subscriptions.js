/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLoginAttempt = /* GraphQL */ `
  subscription OnCreateLoginAttempt(
    $filter: ModelSubscriptionLoginAttemptFilterInput
    $owner: String
  ) {
    onCreateLoginAttempt(filter: $filter, owner: $owner) {
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
export const onUpdateLoginAttempt = /* GraphQL */ `
  subscription OnUpdateLoginAttempt(
    $filter: ModelSubscriptionLoginAttemptFilterInput
    $owner: String
  ) {
    onUpdateLoginAttempt(filter: $filter, owner: $owner) {
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
export const onDeleteLoginAttempt = /* GraphQL */ `
  subscription OnDeleteLoginAttempt(
    $filter: ModelSubscriptionLoginAttemptFilterInput
    $owner: String
  ) {
    onDeleteLoginAttempt(filter: $filter, owner: $owner) {
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
export const onCreateReviewInteractions = /* GraphQL */ `
  subscription OnCreateReviewInteractions(
    $filter: ModelSubscriptionReviewInteractionsFilterInput
    $owner: String
  ) {
    onCreateReviewInteractions(filter: $filter, owner: $owner) {
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
export const onUpdateReviewInteractions = /* GraphQL */ `
  subscription OnUpdateReviewInteractions(
    $filter: ModelSubscriptionReviewInteractionsFilterInput
    $owner: String
  ) {
    onUpdateReviewInteractions(filter: $filter, owner: $owner) {
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
export const onDeleteReviewInteractions = /* GraphQL */ `
  subscription OnDeleteReviewInteractions(
    $filter: ModelSubscriptionReviewInteractionsFilterInput
    $owner: String
  ) {
    onDeleteReviewInteractions(filter: $filter, owner: $owner) {
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
export const onCreateReviewReply = /* GraphQL */ `
  subscription OnCreateReviewReply(
    $filter: ModelSubscriptionReviewReplyFilterInput
    $owner: String
  ) {
    onCreateReviewReply(filter: $filter, owner: $owner) {
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
export const onUpdateReviewReply = /* GraphQL */ `
  subscription OnUpdateReviewReply(
    $filter: ModelSubscriptionReviewReplyFilterInput
    $owner: String
  ) {
    onUpdateReviewReply(filter: $filter, owner: $owner) {
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
export const onDeleteReviewReply = /* GraphQL */ `
  subscription OnDeleteReviewReply(
    $filter: ModelSubscriptionReviewReplyFilterInput
    $owner: String
  ) {
    onDeleteReviewReply(filter: $filter, owner: $owner) {
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
export const onCreateReportReview = /* GraphQL */ `
  subscription OnCreateReportReview(
    $filter: ModelSubscriptionReportReviewFilterInput
    $owner: String
  ) {
    onCreateReportReview(filter: $filter, owner: $owner) {
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
export const onUpdateReportReview = /* GraphQL */ `
  subscription OnUpdateReportReview(
    $filter: ModelSubscriptionReportReviewFilterInput
    $owner: String
  ) {
    onUpdateReportReview(filter: $filter, owner: $owner) {
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
export const onDeleteReportReview = /* GraphQL */ `
  subscription OnDeleteReportReview(
    $filter: ModelSubscriptionReportReviewFilterInput
    $owner: String
  ) {
    onDeleteReportReview(filter: $filter, owner: $owner) {
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
export const onCreateLocationManager = /* GraphQL */ `
  subscription OnCreateLocationManager(
    $filter: ModelSubscriptionLocationManagerFilterInput
    $owner: String
  ) {
    onCreateLocationManager(filter: $filter, owner: $owner) {
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
export const onUpdateLocationManager = /* GraphQL */ `
  subscription OnUpdateLocationManager(
    $filter: ModelSubscriptionLocationManagerFilterInput
    $owner: String
  ) {
    onUpdateLocationManager(filter: $filter, owner: $owner) {
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
export const onDeleteLocationManager = /* GraphQL */ `
  subscription OnDeleteLocationManager(
    $filter: ModelSubscriptionLocationManagerFilterInput
    $owner: String
  ) {
    onDeleteLocationManager(filter: $filter, owner: $owner) {
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
export const onCreateChatGroup = /* GraphQL */ `
  subscription OnCreateChatGroup(
    $filter: ModelSubscriptionChatGroupFilterInput
  ) {
    onCreateChatGroup(filter: $filter) {
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
export const onUpdateChatGroup = /* GraphQL */ `
  subscription OnUpdateChatGroup(
    $filter: ModelSubscriptionChatGroupFilterInput
  ) {
    onUpdateChatGroup(filter: $filter) {
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
export const onDeleteChatGroup = /* GraphQL */ `
  subscription OnDeleteChatGroup(
    $filter: ModelSubscriptionChatGroupFilterInput
  ) {
    onDeleteChatGroup(filter: $filter) {
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
export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
  ) {
    onCreateChatMessage(filter: $filter) {
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
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
  ) {
    onUpdateChatMessage(filter: $filter) {
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
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
  ) {
    onDeleteChatMessage(filter: $filter) {
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
export const onCreateKeywords = /* GraphQL */ `
  subscription OnCreateKeywords($filter: ModelSubscriptionKeywordsFilterInput) {
    onCreateKeywords(filter: $filter) {
      id
      keyword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateKeywords = /* GraphQL */ `
  subscription OnUpdateKeywords($filter: ModelSubscriptionKeywordsFilterInput) {
    onUpdateKeywords(filter: $filter) {
      id
      keyword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteKeywords = /* GraphQL */ `
  subscription OnDeleteKeywords($filter: ModelSubscriptionKeywordsFilterInput) {
    onDeleteKeywords(filter: $filter) {
      id
      keyword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLiveSnap = /* GraphQL */ `
  subscription OnCreateLiveSnap(
    $filter: ModelSubscriptionLiveSnapFilterInput
    $owner: String
  ) {
    onCreateLiveSnap(filter: $filter, owner: $owner) {
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
export const onUpdateLiveSnap = /* GraphQL */ `
  subscription OnUpdateLiveSnap(
    $filter: ModelSubscriptionLiveSnapFilterInput
    $owner: String
  ) {
    onUpdateLiveSnap(filter: $filter, owner: $owner) {
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
export const onDeleteLiveSnap = /* GraphQL */ `
  subscription OnDeleteLiveSnap(
    $filter: ModelSubscriptionLiveSnapFilterInput
    $owner: String
  ) {
    onDeleteLiveSnap(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onCreateReview(filter: $filter, owner: $owner) {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onUpdateReview(filter: $filter, owner: $owner) {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onDeleteReview(filter: $filter, owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness(
    $filter: ModelSubscriptionBusinessFilterInput
    $cognitoUser: String
  ) {
    onCreateBusiness(filter: $filter, cognitoUser: $cognitoUser) {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness(
    $filter: ModelSubscriptionBusinessFilterInput
    $cognitoUser: String
  ) {
    onUpdateBusiness(filter: $filter, cognitoUser: $cognitoUser) {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness(
    $filter: ModelSubscriptionBusinessFilterInput
    $cognitoUser: String
  ) {
    onDeleteBusiness(filter: $filter, cognitoUser: $cognitoUser) {
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
export const onCreateChatGroupUser = /* GraphQL */ `
  subscription OnCreateChatGroupUser(
    $filter: ModelSubscriptionChatGroupUserFilterInput
    $owner: String
  ) {
    onCreateChatGroupUser(filter: $filter, owner: $owner) {
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
export const onUpdateChatGroupUser = /* GraphQL */ `
  subscription OnUpdateChatGroupUser(
    $filter: ModelSubscriptionChatGroupUserFilterInput
    $owner: String
  ) {
    onUpdateChatGroupUser(filter: $filter, owner: $owner) {
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
export const onDeleteChatGroupUser = /* GraphQL */ `
  subscription OnDeleteChatGroupUser(
    $filter: ModelSubscriptionChatGroupUserFilterInput
    $owner: String
  ) {
    onDeleteChatGroupUser(filter: $filter, owner: $owner) {
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
