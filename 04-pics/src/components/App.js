import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  // async onSearchSubmit(term) {
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: {
  //       query: term,
  //     },
  //     headers: {
  //       Authorization: "Client-ID HBhfXfFKG4rp9XGAFOowSfx-5xl3MCgj4XTWPTciHp8",
  //     },
  //   });

  //   console.log(this);
  //   this.setState({ images: response.data.results });
  // }
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onQueryPassed={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
