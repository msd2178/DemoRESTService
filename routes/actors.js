var express = require('express');
var router = express.Router();

function throw_err(err, res) {
    res.json({ 'error': {
        message: err.message,
        error: err
    }});
    throw err;
}

/*
 * GET actors.
 */
router.get('/', function(req, res) {
    var db = req.db;
    db.query('SELECT * FROM actor', function(err, rows, fields) {
        if (err) throw_err(err, res);
        res.json({ 'actors': rows });
    });
    db.end();
});

/*
 * POST actors.
 */
router.post('/', function(req, res) {
    // var db = req.db;
    // db.collection('userlist').insert(req.body, function(err, result){
    //     res.send(
    //         (err === null) ? { msg: '' } : { msg: err }
    //     );
    // });
    res.json({ 'Add an actor': 1 });
});

/*
 * GET actor/id.
 */
router.get('/:id', function(req, res) {
    var db = req.db;
    db.query('SELECT * FROM actor WHERE actor_id = ?', [req.params.id], function(err, rows, fields) {
        if (err) throw_err(err, res);
        res.json(rows[0]);
    });
    db.end();
});

/*
 * PUT actor/id.
 */
router.put('/:id', function(req, res) {
    res.json({ 'Update an actor': 1 });
});

/*
 * DELETE actor/id.
 */
router.delete('/:id', function(req, res) {
    // var db = req.db;
    // var userToDelete = req.params.id;
    // db.collection('userlist').removeById(userToDelete, function(err, result) {
    //     res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    // });
    res.json({ 'Delete this actor': 1 });
});

module.exports = router;
