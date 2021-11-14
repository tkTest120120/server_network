const controller = {};

// 1.Đọc data từ database (select)
controller.list = (req , res)=>{
    req.getConnection((err , connection)=>{
        connection.query("select * from product" , (err , products)=>{
            if(err) res.json(err);
            // console.log(products);
            res.render('index', {data : products});
        });
    });
};

// save
controller.save = (req , res)=>{
    const data = req.body;
    console.log(data);
    req.getConnection((err , connection)=>{
        if(err) res.json(err);

        const query = connection.query("INSERT INTO `product` set ? " , data , (err2 , products)=>{
            if(err2) res.json(err2);

            // console.log(products);
            res.redirect('/list');
        });
    });
};

//edit
controller.edit = (req , res)=>{
    const {id} = req.params;
    console.log("============================   " +  id);
    req.getConnection((err , connection)=>{
        connection.query('select * from product WHERE maSP = ?' , [id] , (err , rows)=>{
            console.log(rows[0]);
            res.render('edit' , {data : rows[0] });
        });
    });
};

// update
controller.update = (req , res)=>{
    const {id} = req.params;
    const newProduct = {
        // maSP : id,
        tenSP : req.body.tenSP,
        donGia : req.body.donGia,
        soLuong : req.body.soLuong,
        moTa : req.body.moTa
    }
    console.log(newProduct);
    req.getConnection((err , connection)=>{
        connection.query('update product set ? where maSP = ?' , [newProduct , id] , (err , rows)=>{
            
            res.redirect('/list');
        });
    });
};

// delete
controller.delete = (req , res)=>{
    const {id} = req.params;
    req.getConnection((err , connection)=>{
        connection.query('delete from product where maSP = ?' , [id] , (err , rows)=>{
            res.redirect('/list');
        });
    });
};

controller.test = (req , res)=>{
    console.log(req.body);
    res.redirect('/');
};

controller.getData = (req , res)=>{
    req.getConnection((err , connection)=>{
        connection.query("select * from product" , (err , products)=>{
            if (err) throw err;

            console.log("\n\nLấy dữ liệu thành công\n");

            var objs = [];
            for (var i = 0; i < products.length ; i++) {
                objs.push({
                    tenSP : products[i].tenSP ,
                    donGia : products[i].donGia,
                    moTa : products[i].moTa
                });
                // objs.push({name : rows[i].name });
                // objs.push({address : rows[i].address });
                // objs.push({phone : rows[i].phone });
            }
            console.log(objs);
            // chuyển mảng  sang JSON
            res.end(JSON.stringify(objs) );
        });
    });
};

controller.sign_up = (req , res)=>{
    
    res.render('register');
};

controller.addUSER = (req , res)=>{
    console.log(req.body);
    const newUser = {
        id : null,
        tk : req.body.tk,
        mk : req.body.mk
    };

    req.getConnection((err , connection)=>{
        connection.query("INSERT INTO `users` set ? " , newUser , (err , customers)=>{
            if(err) res.json(err);
            console.log("\nĐăng ký thành công ... \n");
            
            res.render('login' , {error : ["Đăng ký thành công ! "]});
        });
    });
    
};

controller.getUsers = (req , res)=>{
    req.getConnection((err , connection)=>{
        connection.query("select * from users" , (err , users)=>{
            if(err) res.json(err);
            // console.log(users);
            res.render('getusers', {data : users});
        });
    });
};

// delete user
controller.deleteUser = (req , res)=>{
    const {id} = req.params;
    req.getConnection((err , connection)=>{
        connection.query('delete from users where id = ?' , [id] , (err , rows)=>{
            res.redirect('/users');
        });
    });
};



controller.getLogin = (req , res)=>{
    res.render('login' , { error : []});
};

controller.postLogin = (req , res)=>{
    // console.log(req.body);
    var tk = req.body.tk;
    var mk = req.body.mk;
    req.getConnection((err , connection)=>{
        connection.query("select * from users" , (err , users)=>{
            if(err) res.json(err);
            var a = [];
            a = users;
            a.filter((item)=>{
                if(item.tk == tk && item.mk == mk){
                    console.log(item);
                    res.redirect('/list');
                    return;
                }
            });
            res.render('login' , { error : ["Bạn nhập sai Tài Khoản hoặc Mật Khẩu "]});
            // res.redirect('/list');
        });
    });
};

//edit users
controller.editUSER = (req , res)=>{
    const {id} = req.params;
    
    req.getConnection((err , connection)=>{
        connection.query('select * from users WHERE id = ?' , [id] , (err , rows)=>{
            console.log(rows[0]);
            res.render('edituser' , {data : rows[0] });
        });
    });
};

// update
controller.updateUSER = (req , res)=>{
    const {id} = req.params;
    const newProduct = {
        // maSP : id,
        tk : req.body.tk,
        mk : req.body.mk,
    }
    console.log(req.body);
    req.getConnection((err , connection)=>{
        connection.query('update users set ? where id = ?' , [newProduct , id] , (err , rows)=>{
            
            res.redirect('/users');
        });
    });
};
//
module.exports = controller;