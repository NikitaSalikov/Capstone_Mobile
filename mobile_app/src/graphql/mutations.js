/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLoginAttempt = /* GraphQL */ `
  mutation CreateLoginAttempt(
    $input: CreateLoginAttemptInput!
    $condition: ModelLoginAttemptConditionInput
  ) {
    createLoginAttempt(input: $input, condition: $condition) {
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
export const updateLoginAttempt = /* GraphQL */ `
  mutation UpdateLoginAttempt(
    $input: UpdateLoginAttemptInput!
    $condition: ModelLoginAttemptConditionInput
  ) {
    updateLoginAttempt(input: $input, condition: $condition) {
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
export const deleteLoginAttempt = /* GraphQL */ `
  mutation DeleteLoginAttempt(
    $input: DeleteLoginAttemptInput!
    $condition: ModelLoginAttemptConditionInput
  ) {
    deleteLoginAttempt(input: $input, condition: $condition) {
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
export const createReviewInteractions = /* GraphQL */ `
  mutation CreateReviewInteractions(
    $input: CreateReviewInteractionsInput!
    $condition: ModelReviewInteractionsConditionInput
  ) {
    createReviewInteractions(input: $input, condition: $condition) {
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
export const updateReviewInteractions = /* GraphQL */ `
  mutation UpdateReviewInteractions(
    $input: UpdateReviewInteractionsInput!
    $condition: ModelReviewInteractionsConditionInput
  ) {
    updateReviewInteractions(input: $input, condition: $condition) {
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
export const deleteReviewInteractions = /* GraphQL */ `
  mutation DeleteReviewInteractions(
    $input: DeleteReviewInteractionsInput!
    $condition: ModelReviewInteractionsConditionInput
  ) {
    deleteReviewInteractions(input: $input, condition: $condition) {
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
export const createReviewReply = /* GraphQL */ `
  mutation CreateReviewReply(
    $input: CreateReviewReplyInput!
    $condition: ModelReviewReplyConditionInput
  ) {
    createReviewReply(input: $input, condition: $condition) {
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
export const updateReviewReply = /* GraphQL */ `
  mutation UpdateReviewReply(
    $input: UpdateReviewReplyInput!
    $condition: ModelReviewReplyConditionInput
  ) {
    updateReviewReply(input: $input, condition: $condition) {
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
export const deleteReviewReply = /* GraphQL */ `
  mutation DeleteReviewReply(
    $input: DeleteReviewReplyInput!
    $condition: ModelReviewReplyConditionInput
  ) {
    deleteReviewReply(input: $input, condition: $condition) {
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
export const createReportReview = /* GraphQL */ `
  mutation CreateReportReview(
    $input: CreateReportReviewInput!
    $condition: ModelReportReviewConditionInput
  ) {
    createReportReview(input: $input, condition: $condition) {
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
export const updateReportReview = /* GraphQL */ `
  mutation UpdateReportReview(
    $input: UpdateReportReviewInput!
    $condition: ModelReportReviewConditionInput
  ) {
    updateReportReview(input: $input, condition: $condition) {
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
export const deleteReportReview = /* GraphQL */ `
  mutation DeleteReportReview(
    $input: DeleteReportReviewInput!
    $condition: ModelReportReviewConditionInput
  ) {
    deleteReportReview(input: $input, condition: $condition) {
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
export const createLocationManager = /* GraphQL */ `
  mutation CreateLocationManager(
    $input: CreateLocationManagerInput!
    $condition: ModelLocationManagerConditionInput
  ) {
    createLocationManager(input: $input, condition: $condition) {
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
export const updateLocationManager = /* GraphQL */ `
  mutation UpdateLocationManager(
    $input: UpdateLocationManagerInput!
    $condition: ModelLocationManagerConditionInput
  ) {
    updateLocationManager(input: $input, condition: $condition) {
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
export const deleteLocationManager = /* GraphQL */ `
  mutation DeleteLocationManager(
    $input: DeleteLocationManagerInput!
    $condition: ModelLocationManagerConditionInput
  ) {
    deleteLocationManager(input: $input, condition: $condition) {
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
export const createChatGroup = /* GraphQL */ `
  mutation CreateChatGroup(
    $input: CreateChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    createChatGroup(input: $input, condition: $condition) {
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
export const updateChatGroup = /* GraphQL */ `
  mutation UpdateChatGroup(
    $input: UpdateChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    updateChatGroup(input: $input, condition: $condition) {
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
export const deleteChatGroup = /* GraphQL */ `
  mutation DeleteChatGroup(
    $input: DeleteChatGroupInput!
    $condition: ModelChatGroupConditionInput
  ) {
    deleteChatGroup(input: $input, condition: $condition) {
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
export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
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
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
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
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
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
export const createKeywords = /* GraphQL */ `
  mutation CreateKeywords(
    $input: CreateKeywordsInput!
    $condition: ModelKeywordsConditionInput
  ) {
    createKeywords(input: $input, condition: $condition) {
      id
      keyword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateKeywords = /* GraphQL */ `
  mutation UpdateKeywords(
    $input: UpdateKeywordsInput!
    $condition: ModelKeywordsConditionInput
  ) {
    updateKeywords(input: $input, condition: $condition) {
      id
      keyword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteKeywords = /* GraphQL */ `
  mutation DeleteKeywords(
    $input: DeleteKeywordsInput!
    $condition: ModelKeywordsConditionInput
  ) {
    deleteKeywords(input: $input, condition: $condition) {
      id
      keyword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLiveSnap = /* GraphQL */ `
  mutation CreateLiveSnap(
    $input: CreateLiveSnapInput!
    $condition: ModelLiveSnapConditionInput
  ) {
    createLiveSnap(input: $input, condition: $condition) {
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
export const updateLiveSnap = /* GraphQL */ `
  mutation UpdateLiveSnap(
    $input: UpdateLiveSnapInput!
    $condition: ModelLiveSnapConditionInput
  ) {
    updateLiveSnap(input: $input, condition: $condition) {
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
export const deleteLiveSnap = /* GraphQL */ `
  mutation DeleteLiveSnap(
    $input: DeleteLiveSnapInput!
    $condition: ModelLiveSnapConditionInput
  ) {
    deleteLiveSnap(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
export const createChatGroupUser = /* GraphQL */ `
  mutation CreateChatGroupUser(
    $input: CreateChatGroupUserInput!
    $condition: ModelChatGroupUserConditionInput
  ) {
    createChatGroupUser(input: $input, condition: $condition) {
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
export const updateChatGroupUser = /* GraphQL */ `
  mutation UpdateChatGroupUser(
    $input: UpdateChatGroupUserInput!
    $condition: ModelChatGroupUserConditionInput
  ) {
    updateChatGroupUser(input: $input, condition: $condition) {
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
export const deleteChatGroupUser = /* GraphQL */ `
  mutation DeleteChatGroupUser(
    $input: DeleteChatGroupUserInput!
    $condition: ModelChatGroupUserConditionInput
  ) {
    deleteChatGroupUser(input: $input, condition: $condition) {
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
