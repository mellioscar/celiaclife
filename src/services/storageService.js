// src/services/storageService.js
import { storageUrl } from '../databases/realtimeDatabase';

export const uploadImage = async (uri, userId, idToken) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  const uploadUrl = `${storageUrl}/o/profileImages%2F${userId}?uploadType=media&name=profileImages/${userId}`;

  const uploadResponse = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': blob.type,
    },
    body: blob,
  });

  if (!uploadResponse.ok) {
    const error = await uploadResponse.json();
    throw new Error(error.error.message);
  }

  const uploadData = await uploadResponse.json();
  const downloadUrl = `${storageUrl}/o/${encodeURIComponent(uploadData.name)}?alt=media&token=${idToken}`;

  return downloadUrl;
};
