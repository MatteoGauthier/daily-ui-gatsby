import React, { Component } from "react"
import SearchInput, { createFilter } from "react-search-input"
import Card from "./Card"

const KEYS_TO_FILTERS = ["day", "title", "tags"]

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: "",
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render() {
    const filteredItems = this.props.searches.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )

    return (
      <div>
        <SearchInput
          className="search-input"
          onChange={this.searchUpdated}
        />
        <div className="flex space-x-4 space-y-2">
          {filteredItems.map(item => {
            console.log(item)
            return <Card dest={item.day} item={item} key={item.id} />
          })}
        </div>
      </div>
    )
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term.replace("#", "") })
  }
}
