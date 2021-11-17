import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';

const previewUrl = 'https://media.gettyimages.com/photos/an-artwork-issued-from-the-album-cover-the-wall-released-in-1979-is-picture-id862122228?s=612x612';

export default class Album extends React.Component {
  // constructor(){
  //   super();
  // }

  render() {
    const { album } = this.props.location;
    return (
      <div>
        <Header />
        <section
          data-testid="page-album"
          className="flex flex-row flex-wrap  justify-around
          md:justify-center items-start mt-16"
        >
          <section className="mx-auto container">
            <div className="w-72 h-96">
              <img
                src={ previewUrl }
                alt=""
                className="object-cover h-72 w-full shadow-lx"
              />
              <span className="text-2xl font-semibold">{ album }</span>
              <p className="text-sm">Description</p>
            </div>
          </section>
          <section className="mx-auto">
            <div className="w-full">
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
            </div>
          </section>
        </section>
      </div>
    );
  }
}
