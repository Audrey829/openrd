

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F23',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 14,
    ...Platform.select({
      ios: {
        shadowColor: '#969FFF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 32,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  searchButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#969FFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  searchResultContainer: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  searchResultCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#969FFF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 32,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  searchResultHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  searchResultIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(150, 159, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  searchResultContent: {
    flex: 1,
  },
  searchResultTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  searchResultAnswer: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 18,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  viewAllButton: {
    fontSize: 12,
    color: '#969FFF',
  },
  hotQuestionsList: {
    gap: 8,
  },
  questionItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#969FFF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 32,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionText: {
    flex: 1,
    fontSize: 12,
    color: '#FFFFFF',
    marginRight: 8,
  },
  chevronIcon: {
    transform: [{ rotate: '0deg' }],
  },
  chevronIconExpanded: {
    transform: [{ rotate: '180deg' }],
  },
  answerPanel: {
    marginTop: 4,
  },
  answerText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 18,
  },
  knowledgeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  knowledgeItem: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#969FFF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 32,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  knowledgeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  knowledgeIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knowledgeTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  knowledgeDescription: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  resourcesList: {
    gap: 8,
  },
  resourceCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#969FFF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 32,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  resourceContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  resourceIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  resourceInfo: {
    flex: 1,
  },
  resourceName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  resourceDistance: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 2,
  },
  resourceDescription: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  resourceRating: {
    alignItems: 'flex-end',
  },
  resourceRatingText: {
    fontSize: 12,
    color: '#10B981',
    marginBottom: 2,
  },
  resourceType: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  pathwaysList: {
    gap: 8,
  },
  pathwayItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        shadowColor: '#969FFF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 32,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  pathwayContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  pathwayIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pathwayInfo: {
    flex: 1,
  },
  pathwayTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  pathwayDescription: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },


  // 在 styles.ts 文件中添加
aiSection: {
  marginBottom: 20,
  backgroundColor: 'white',
  borderRadius: 12,
  padding: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},
aiHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},
aiTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
},
aiToggleButton: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 8,
},
aiToggleText: {
  fontSize: 14,
  color: '#969FFF',
  marginLeft: 4,
},
aiChatContainer: {
  borderWidth: 1,
  borderColor: '#e1e5e9',
  borderRadius: 8,
  overflow: 'hidden',
},
aiMessagesList: {
  height: 200,
  padding: 12,
  backgroundColor: '#f8f9fa',
},
aiWelcome: {
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
},
aiWelcomeText: {
  fontSize: 14,
  color: '#6c757d',
  textAlign: 'center',
  lineHeight: 20,
},
aiMessageContainer: {
  flexDirection: 'row',
  marginBottom: 12,
  alignItems: 'flex-start',
},
aiUserMessage: {
  justifyContent: 'flex-end',
},
aiAssistantMessage: {
  justifyContent: 'flex-start',
},
aiAvatar: {
  width: 32,
  height: 32,
  borderRadius: 16,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 8,
},
aiUserAvatar: {
  backgroundColor: '#007bff',
},
aiAssistantAvatar: {
  backgroundColor: '#28a745',
},
aiAvatarText: {
  fontSize: 14,
},
aiMessageBubble: {
  maxWidth: '70%',
  padding: 10,
  borderRadius: 12,
},
aiUserBubble: {
  backgroundColor: '#007bff',
  borderBottomRightRadius: 4,
},
aiAssistantBubble: {
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor: '#e1e5e9',
  borderBottomLeftRadius: 4,
},
aiMessageText: {
  fontSize: 14,
  lineHeight: 18,
},
aiUserText: {
  color: 'white',
},
aiAssistantText: {
  color: '#333',
},
aiTypingText: {
  color: '#666',
  fontSize: 12,
  fontStyle: 'italic',
},
aiInputContainer: {
  flexDirection: 'row',
  padding: 12,
  backgroundColor: 'white',
  borderTopWidth: 1,
  borderTopColor: '#e1e5e9',
},
aiTextInput: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#e1e5e9',
  borderRadius: 20,
  paddingHorizontal: 16,
  paddingVertical: 8,
  fontSize: 14,
  maxHeight: 80,
},
aiSendButton: {
  marginLeft: 8,
  backgroundColor: '#007bff',
  borderRadius: 20,
  width: 36,
  height: 36,
  justifyContent: 'center',
  alignItems: 'center',
},
aiSendButtonDisabled: {
  backgroundColor: '#6c757d',
},
});


