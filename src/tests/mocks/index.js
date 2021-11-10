export const defaultUser = {
  name: 'User Test',
  email: 'email@test.com',
  description: 'Lorem ipsum',
  image: 'url-to-image',
};

export const searchAlbumDefaultResponse = [
  {
    artistId: 10,
    artistName: 'Artist Name 1',
    collectionId: 101,
    collectionName: 'Album Name 1',
    collectionPrice: 10.10,
    artworkUrl100: 'url-to-artwork100',
    releaseDate: '10/10/2010',
    trackCount: 5,
  },
  {
    artistId: 10,
    artistName: 'Artist Name 1',
    collectionId: 102,
    collectionName: 'Album Name 2',
    collectionPrice: 10.20,
    artworkUrl100: 'url-to-artwork100',
    releaseDate: '11/11/2011',
    trackCount: 6,
  },
];

export const iTunesLookupAlbumResponse = { results:
  [
    {
      artistName: 'Artist Name',
      collectionName: 'Collection Name',
    },
    {
      trackId: 12,
      trackName: 'Track Name 1',
      previewUrl: 'preview-url-1',
      kind: 'song',
    },
    {
      trackId: 21,
      trackName: 'Track Name 2',
      previewUrl: 'preview-url-2',
      kind: 'song',
    },
    {
      trackId: 31,
      trackName: 'Track Name 3',
      previewUrl: 'preview-url-3',
      kind: 'song',
    },
    {
      trackId: 42,
      trackName: 'Track Name 4',
      previewUrl: 'preview-url-4',
      kind: 'song',
    },
  ] };

export const musicAPIDefaultResponse = [
  {
    artistName: 'Artist Name',
    collectionName: 'Collection Name',
  },
  {
    trackId: 12,
    trackName: 'Track Name 1',
    previewUrl: 'preview-url-1',
    kind: 'song',
  },
  {
    trackId: 21,
    trackName: 'Track Name 2',
    previewUrl: 'preview-url-2',
    kind: 'song',
  },
  {
    trackId: 31,
    trackName: 'Track Name 3',
    previewUrl: 'preview-url-3',
    kind: 'song',
  },
  {
    trackId: 42,
    trackName: 'Track Name 4',
    previewUrl: 'preview-url-4',
    kind: 'song',
  },
];

export const favoriteSongsList = [
  {
    trackId: 12,
    trackName: 'Track Name 1',
    previewUrl: 'preview-url-1',
    kind: 'song',
  },
  {
    trackId: 31,
    trackName: 'Track Name 3',
    previewUrl: 'preview-url-3',
    kind: 'song',
  },
];
