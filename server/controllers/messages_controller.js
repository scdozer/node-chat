var messages = [];
var id = 0;

module.exports = {

  create: ( req, res ) => {
    var {text, time} = req.body
    var newMessage = {
      text: text,
      time: time,
      id: id
    }
    messages.push(newMessage);
    id++;
    res.status(200).json(messages)
  },

  read: ( req, res ) => {
    res.status(200).json(messages)
  },

  update: ( req, res ) => {
    var {text} = req.body;
    var idToCheck = req.params.id;
    var indexToChange = messages.findIndex( message => message.id == idToCheck);

    messages[indexToChange] = {
      id: messages[indexToChange].id,
      text: text || messages[indexToChange].text,
      time: messages[indexToChange].time
    }
    res.status(200).json(messages)
  },

  delete: ( req, res ) => {
    var idToDelete = req.params.id;
    var indexToDelete = messages.findIndex( message => message.id == idToDelete);

    messages.splice(indexToDelete, 1);

    res.status(200).json(messages)
  }

}
