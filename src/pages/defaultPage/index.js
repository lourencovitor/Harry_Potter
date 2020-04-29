import React, { Fragment } from "react";
import { DefaultScreen } from "./components";
import axios from "axios";

export default class DefaultPage extends React.Component {
  state = {
    info: {
      house: {
        name: "A que casa você pertence ?",
        color: { color: "" },
        image:
          "https://pa1.narvii.com/6715/a64e34371de1bf6106720867858ccbb4d182febb_hq.gif",
      },
    },
  };

  onSubmit = async () => {
    try {
      const res = await axios.get(
        "https://www.potterapi.com/v1/sortingHat?key=%242a%2410%24a.TPgG3nbqs4.2%2FmnnOTH.rexN63crFaTBWJiXjFkfQuqMMU68NcC"
      );
      if (res.data === "Gryffindor") {
        this.setState({
          info: {
            ...this.state.info,
            house: {
              name: res.data,
              color: { color: "#990800" },
              image: `https://2.bp.blogspot.com/-h_EgPmr1FqA/UxDppzFSw6I/AAAAAAAAGYg/eZcFTU3G-bc/s1600/Grifin%C3%B3lia.gif`,
            },
          },
        });
      }
      if (res.data === "Ravenclaw") {
        this.setState({
          info: {
            ...this.state.info,
            house: {
              name: res.data,
              color: { color: "#120a8f" },
              image: `https://1.bp.blogspot.com/-ygN0e9tyenA/UxDpux11bPI/AAAAAAAAGYo/kg-oUAj1pls/s1600/Corvinal.gif`,
            },
          },
        });
      }
      if (res.data === "Slytherin") {
        this.setState({
          info: {
            ...this.state.info,
            house: {
              name: res.data,
              color: { color: "#41d773" },
              image: `https://i.pinimg.com/originals/cd/6c/b7/cd6cb76bcba1cbb9fbdd7517b24e06c0.gif`,
            },
          },
        });
      }
      if (res.data === "Hufflepuff") {
        this.setState({
          info: {
            ...this.state.info,
            house: {
              name: res.data,
              color: { color: "#ffd700" },
              image: `https://i.pinimg.com/originals/91/5c/a4/915ca4a8c8608c5c64fec81d6a4b50f3.gif`,
            },
          },
        });
      }
    } catch (erro) {
      console.error("deu ruim", erro);
    }
  };

  render() {
    const { info } = this.state;
    return (
      <Fragment>
        <DefaultScreen onSubmit={this.onSubmit.bind(this)} info={info} />
      </Fragment>
    );
  }
}
