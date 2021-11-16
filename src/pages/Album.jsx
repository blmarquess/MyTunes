import React from 'react';
import Header from '../components/Header';
import SongPlayer from '../components/SongPlayer';

const previewUrl = 'https://media.gettyimages.com/photos/an-artwork-issued-from-the-album-cover-the-wall-released-in-1979-is-picture-id862122228?s=612x612';

export default () => (
  <div>
    <Header />
    <section data-testid="page-album" className="flex justify-center items-start mt-10">
      <section className="w-2/5 ml-10">
        <div className="w-72 h-96">
          <img src={ previewUrl } alt="" className="object-cover h-72 w-full my-4 shadow-lx" />
          <span className="text-2xl font-semibold">Title</span>
          <p className="text-sm">Description</p>
        </div>
      </section>
      <section className="w-2/5">
        <div className="w-full">
          <SongPlayer />
          <SongPlayer />
          <SongPlayer />
          <SongPlayer />
          <SongPlayer />
          <SongPlayer />
          <SongPlayer />
          <SongPlayer />
          <SongPlayer />
          <SongPlayer />
        </div>
      </section>
    </section>
  </div>);
