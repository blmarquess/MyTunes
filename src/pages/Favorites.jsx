import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Favorites extends React.Component {
  constructor() {
    super();
    this.toRemoveStared = this.toRemoveStared.bind(this);
    this.getMyStareds = this.getMyStareds.bind(this);
    this.state = {
      loading: false,
      staredSongs: [],
    };
  }

  componentDidMount() {
    this.getMyStareds();
  }

  async getMyStareds() {
    const sounds = await getFavoriteSongs();
    this.setState(() => ({ staredSongs: sounds }));
  }

  async toRemoveStared(song) {
    this.setState(() => ({ loading: true }));
    await removeSong(song);
    await this.getMyStareds();
    this.setState({ loading: false });
  }

  render() {
    const { staredSongs, loading } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        <section
          data-testid="page-album"
          className="flex flex-row flex-wrap  justify-around
          md:justify-center items-start mt-16"
        >
          <section className="mx-auto container">
            <div className="w-72 h-96 grid grid-cols-1 mb-8">
              <img
                src="https://fakedetail.com/userface_image/male/male202010306735279521.png"
                alt="Capa do Album"
                className="object-cover h-72 w-full shadow-lx"
              />
            </div>
          </section>
          <section className="mx-auto">
            <div className="w-full">
              {loading ? (
                <div className="flex p-4 space-x-2 pulse text-xl items-center">
                  <div
                    className="loading h-8 w-8 rounded-full border-l-2
                  border-green-800"
                  />
                  <p>Carregando...</p>
                </div>)
                : (
                  staredSongs
                    .map((song, i) => (
                      <div key={ song.trackId + i }>
                        <MusicCard
                          favorited={ staredSongs
                            .some(({ trackId }) => trackId === song.trackId) }
                          OnOffStared={ () => this.toRemoveStared(song) }
                          { ...song }
                        />
                      </div>))
                )}
            </div>
          </section>
        </section>
      </div>
    );
  }
}
