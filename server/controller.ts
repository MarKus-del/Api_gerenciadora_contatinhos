import model from './model';

class Controller {

    constructor(){}

    //select
    getCrushs(){
        return model.find({});
    }

    select(req, res){
        this.getCrushs()
        .then(crushs => res.status(200).json({'results': crushs}))
        .catch(err => res.status(400).json({'results': err}))
    }

    //selectedOne
    getCrushsByID(id){
        return model.find(id);
    }

    selectOne(req, res){
        const id = { _id: req.params.id };

        this.getCrushsByID(id)
        .then(crushs => res.status(200).json({'results': crushs}))
        .catch(err => res.status(400).json({'results': err}))
    }

    //delete
    deleteByID(id){
        return model.deleteOne(id);
    }

    delete(req, res){
        const id = { _id: req.params.id };     

        this.deleteByID(id)
        .then(crushs => res.status(200).json({'results': crushs}))
        .catch(err => res.status(400).json({'results': err}))
    }

    //update
    updateCrush(id, data){
        return model.findByIdAndUpdate(id, data);
    }

    update(req, res){
        const id = { _id: req.params.id };
        const crush = req.body;

        this.updateCrush(id, crush)
        .then(crushs => res.status(200).json({'results': crushs}))
        .catch(err => res.status(400).json({'results': err}))
    }

    //post 
    createCrush(data){
        return model.create(data);
    }

    insert(req, res){
        const id = { _id: req.params.id };
        const crush = req.body;

        this.createCrush(crush)
        .then(crushs => res.status(200).json({'results': crushs}))
        .catch(err => res.status(400).json({'results': err}))
    }

};

export default Controller;