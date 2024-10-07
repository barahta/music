const sequelize = require('../db')
const {Sequelize, DataTypes} = require('sequelize')
const User = sequelize.define('users',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    tn:{type:DataTypes.STRING,unique:true},
    name:{type:DataTypes.TEXT},
    login:{type:DataTypes.STRING,unique:true},
    email:{type:DataTypes.STRING},
    password:{type:DataTypes.STRING},
    avatar:{type:DataTypes.TEXT},
    admin:{type:DataTypes.BOOLEAN,defaultValue: false},
    checked:{type:DataTypes.BOOLEAN,defaultValue: false},
    phone:{type:DataTypes.STRING},
    unit:{type:DataTypes.INTEGER},
    developer_id:{type:DataTypes.INTEGER,allowNull:true}
})
const Token = sequelize.define('token',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    device_token:{type:DataTypes.TEXT},
    refresh_token:{type:DataTypes.TEXT,require:true}
})

const Skills = sequelize.define('skills',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    days:{type:DataTypes.TEXT},
    info:{type:DataTypes.TEXT},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})
const Developers = sequelize.define('developers',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    group:{type:DataTypes.INTEGER},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})

const SkillDeveloper = sequelize.define('SkillDeveloper', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const Documents = sequelize.define('documents',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING},
    file:{type:DataTypes.STRING},
    user_id:{type:DataTypes.INTEGER,ref:'users'},
    skill_id:{type:DataTypes.INTEGER,ref:'skills'},
    trash:{type:DataTypes.BOOLEAN,defaultValue:false}
})

User.belongsTo(Developers, { foreignKey: 'developer_id', as: 'developers' });
Developers.hasMany(User, { foreignKey: 'developer_id', as: 'users' });

Skills.belongsToMany(Developers, { through: 'SkillDeveloper' });
Developers.belongsToMany(Skills, { through: 'SkillDeveloper' });

// Связывание модели промежуточной таблицы с Skills и Developers
Skills.belongsToMany(Developers, { through: SkillDeveloper });
Developers.belongsToMany(Skills, { through: SkillDeveloper });

Skills.hasMany(Documents, { foreignKey: 'skill_id', as: 'documents' });
Documents.belongsTo(Skills, { foreignKey: 'skill_id', as: 'skill' });

const News = sequelize.define('news',{
    id: {type: DataTypes.INTEGER,primaryKey: true,autoIncrement: true},
    title: {type: DataTypes.TEXT},
    desc: {type: DataTypes.TEXT},
    text: {type: DataTypes.JSONB,allowNull: false,defaultValue: []},
    public: {type: DataTypes.JSONB,allowNull: false,defaultValue: [] },
    image: {type: DataTypes.TEXT}
})

const Sites = sequelize.define('sites',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.TEXT},
    desc:{type:DataTypes.TEXT},
    image:{type:DataTypes.TEXT}
})

const AUPs = sequelize.define('aup',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.TEXT
    },
    secondname: {
        type: DataTypes.TEXT
    },
    lastname: {
        type: DataTypes.TEXT
    },
    developers: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    }
})

module.exports = {
    User,Token,Skills,Developers,SkillDeveloper,Documents,News, Sites,AUPs
}