import PropTypes from "prop-types";
import React from "react";

require("core-js/fn/array/find");

import Article from "../components/Article";
import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";

const SearchPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>{theme => <Article theme={theme} />}</ThemeContext.Consumer>

      <Seo facebook={facebook} />

      {/* --- STYLES --- */}
      <style jsx>{`
        .icon {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 20px;
        }
        .icon :global(svg) {
          height: 30px;
        }
      `}</style>
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SearchPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
