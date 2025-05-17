export const validateTwitterHandle = (handle) => {
  const twitterRegex = /^[A-Za-z0-9_]{4,15}$/;
  return twitterRegex.test(handle.replace('@', ''));
};

export const validateAudioRecording = (audioChunks) => {
  return audioChunks.length > 0;
};

export const validateMood = (mood) => {
  const validMoods = ['friendly', 'professional', 'casual', 'enthusiastic'];
  return validMoods.includes(mood);
};

export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^\+[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};

export const validatePoemRequest = ({ question1, question2, question3, name }) => {
  return Boolean(question1 && question2 && question3 && name);
};
