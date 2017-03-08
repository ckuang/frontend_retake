"use strict";

module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    location: DataTypes.STRING,
    industry: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Person.hasMany(models.Experience)
      }
    }
  });

  return Person;
};
