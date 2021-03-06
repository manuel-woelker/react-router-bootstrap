var React = require('react');
var classSet = require('react/lib/cx');

var MenuItem = require('react-bootstrap/lib/MenuItem');
var { Navigation, State } = require('react-router');
var LinkMixin = require('./LinkMixin');

var joinClasses = require('react/lib/joinClasses');

var MenuItemLink = React.createClass({
  mixins: [
    LinkMixin,
    Navigation,
    State
  ],

  render: function() {
    var {
      to,
      params,
      query,
      active,
      className,
      onSelect, // Not going to use this, just stripping off the props!
      ...props} = this.props;

    if (this.props.active === undefined) {
      active = this.isActive(to, params, query);
    }

    return (
      <MenuItem {...props}
        href={this.getHref()}
        className={ joinClasses(className, classSet({ active: active })) }
        onClick={this.handleRouteTo}
        ref="menuItem">
        {this.props.children}
      </MenuItem>
    );
  }
});

module.exports = MenuItemLink;
