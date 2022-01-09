const express = require('express')
const {graphqlHTTP} = require('express-graphql')

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLFloat
} = require('graphql')

const app = express()

const myProcedures = [
    {
        id: 1, 
        CPTCode: '27345',
        Procedure: 'Knee Arthroscopy',
        Price: 8000,
        FacilityId: 1
    },
    {
        id: 2, 
        CPTCode: '24359',
        Procedure: 'Elbow Tenotomy (Tennis Elbow)',
        Price: 4000,
        FacilityId: 1
    },
    {
        id: 3, 
        CPTCode: '23430',
        Procedure: 'Shoulder Biceps Tendon Repair',
        Price: 4000,
        FacilityId: 1
    }
]

const myFacilities = [
    {
        id: 1,
        name: 'Orthopedic & Sports Institute of the Fox Valley',
        address: '2105 E. Enterprise Ave.<br>Appleton, WI 54913'
    },
    {
        id: 2,
        name: 'The Center for Aestetics & Plastic Surgery',
        address: '425 S. Commercial St.<br>Neenah, WI 54956'
    }
]

const myProviders = [
    {
        id: 1,
        name: 'Brian Lohrbach, MD',
        FacilityId: 1
    },
    {
        id: 2,
        name: 'David Kuplic, MD',
        FacilityId: 1
    },
    {
        id: 3,
        name: 'Todd Van Ye, MD',
        FacilityId: 2
    }
]

/*
    ======================================================================
        Model - Procedures(s)
    ======================================================================    
*/
const ProcedureType = new GraphQLObjectType({
    name: 'Procedure',
    description: 'This represents a surgical procedure.',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        CPTCode: { type: new GraphQLNonNull(GraphQLString) },
        Procedure: { type: new GraphQLNonNull(GraphQLString) },
        Price: { type: new GraphQLNonNull(GraphQLFloat) },
        FacilityId: { type: new GraphQLNonNull(GraphQLInt)},
        facility: {
            type: FacilityType,
            resolve: (procedure) => {
                return myFacilities.find(facility => facility.id === procedure.FacilityId)
            }
        }
    })
})

/*
    ======================================================================
        Model - Facilities(s)
    ======================================================================    
*/
const FacilityType = new GraphQLObjectType({
    name: 'Facility',
    description: 'This represents a facility.',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString)}
    })
})

/*
    ======================================================================
        Model - Provider(s)
    ======================================================================    
*/
const ProviderType = new GraphQLObjectType({
    name: 'Provider',
    description: 'This represents a provider.',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        FacilityId: { type: new GraphQLNonNull(GraphQLInt)},
        facility: {
            type: FacilityType,
            resolve: (provider) => {
                return myFacilities.find(facility => facility.id === provider.FacilityId)
            }
        }
    })
})

/*
    ======================================================================
        Read Queries (cRud)
    ======================================================================    
*/
const RootQueryType = new GraphQLObjectType ({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        procedures: {
            type: new GraphQLList(ProcedureType),
            description: 'List of all procedures',
            resolve: () => myProcedures
        },
        facilities: {
            type: new GraphQLList(FacilityType),
            description: 'List of all facilities',
            resolve: () => myFacilities
        },
        providers: {
            type: new GraphQLList(ProviderType),
            description: 'List of all providers',
            resolve: () => myProviders
        },
        procedure: {
            type: ProcedureType,
            description: 'A single procedure',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => myProcedures.find(procedure => procedure.id === args.id)
        },
        provider: {
            type: ProviderType,
            description: 'A single provider.',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => myProviders.find(provider => provider.id === args.id)
        },
        facility: {
            type: FacilityType,
            description: 'A single facility.',
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parent, args) => myFacilities.find(facility => facility.id === args.id)
        }
    })
})

/*
    ======================================================================
        Create Queries (Crud)
    ======================================================================    
*/
const RootMutationType = new GraphQLObjectType ({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addFacility: {
            type: FacilityType,
            description: 'Add a facility.',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                address: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                const facility = { 
                    id: myFacilities.length + 1, 
                    name: args.name, 
                    address: args.address
                }
                myFacilities.push(facility)
                return facility
            }
        },
        addProvider: {
            type: ProviderType,
            description: 'Add a provider.',
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                FacilityId: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                const provider = { 
                    id: myProviders.length + 1, 
                    name: args.name, 
                    FacilityId: args.FacilityId
                }
                myProviders.push(provider)
                return provider
            }
        },
        addProcedure: {
            type: ProcedureType,
            description: 'Add a procedure.',
            args: {
                CPTCode: { type: new GraphQLNonNull(GraphQLString) },
                Procedure: { type: new GraphQLNonNull(GraphQLString) },
                Price: { type: new GraphQLNonNull(GraphQLFloat) },
                FacilityId: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                const procedure = { 
                    id: myProcedures.length + 1, 
                    CPTCode: args.CPTCode, 
                    Procedure: args.Procedure,
                    Price: args.FacilityId,
                    FacilityId: args.FacilityId
                }
                myProcedures.push(procedure)
                return procedure
            }
        }
    })
})

const schema = new GraphQLSchema ({
    query: RootQueryType
    , mutation: RootMutationType
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
app.listen(5000., () => console.log('Server Running'))