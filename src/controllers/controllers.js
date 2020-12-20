const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM songs', (err, music) => {
            if (err) {
                res.json(err);
            }
            res.render('main', {
                data: music
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO songs SET ?', [data], (err, music) => {
            console.log(music);
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
         conn.query('SELECT * FROM songs WHERE id = ?', [id], (err, music) => {
             console.log(music)
            res.render('edit', {
                data: music[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
         conn.query('UPDATE songs SET ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    req.getConnection((err, conn) => {
        //const id = req.params.id;
        const { id } = req.params;
        conn.query('DELETE FROM songs WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};


//consults


controller.byname = (req, res) => {
    req.getConnection((err, conn) => {
        const name = req.body;
        conn.query('SELECT * FROM songs WHERE name = ?', [name.byname], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('main', {
                data: rows
            });
        });
    });
}

controller.byauthor = (req, res) => {
    req.getConnection((err, conn) => {
        const author = req.body;
        conn.query('SELECT * FROM songs WHERE author = ?', [author.byauthor], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('main', {
                data: rows
            });
        });
    });
}

controller.byduration = (req, res) => {
    req.getConnection((err, conn) => {
        const duration = req.body;
        conn.query('SELECT * FROM songs WHERE duration = ?', [duration.byduration], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('main', {
                data: rows
            });
        });
    });
}

controller.byversion = (req, res) => {
    req.getConnection((err, conn) => {
        const version = req.body;
        conn.query('SELECT * FROM songs WHERE version = ?', [version.byversion], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('main', {
                data: rows
            });
        });
    });
}

controller.bylabel = (req, res) => {
    req.getConnection((err, conn) => {
        const label = req.body;
        console.log(label)
        conn.query('SELECT * FROM songs WHERE label = ?', [label.label], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.render('main', {
                data: rows
            });
        });
    });
}


module.exports = controller;