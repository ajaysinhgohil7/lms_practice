

// import { saveAs }  from 'file-saver';

    
 const fs = require('fs');


function generateNodesEdges(noOfNodes, noOfEdges) {
    
    const nodeTypes = ['company', 'address', 'person', 'bankAccount', 'sanctionsList'];
    
    const edgeTypes = ['locate at', 'has a', 'belongs to', 'registered address', 'lives at'];
    
    const countries = ['INDIA', 'USA', 'CANADA', 'CHINA', 'RUSSIA', 'GERMANY'];
    
    const icons = [
        'bank',    'officer',    'email',    'website',    'contract',
        'users',    'balance',    'money',    'phone',    'sector',
        'address',    'person',    'city',    'amount',    'account-number',
        'customer',    'industry',    'country',    'intermediary',    'counterparty',
        'company',    'male',    'business',    'ceo',    'url',
        'ip-address',    'account',    'default',    'agreement',    'credit-card',
        'state',    'corporate',    'user',    'entity',    'zip',
        'percentage',    'transaction',    'invoice',    'transfer',    'subsidiar'
       ];
    const possiblityOfAddress = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    let data = {
        edges:[],
        nodes:[]
    };
    
    class Node{
    
        constructor(id, name, country, balance, zip, address, icon, isActive, type){
            this.id = id;
            this.name = name;
            this.country = country;
            this.balance = balance;
            this.zip = zip;
            this.address = address;
            this.isActive = isActive;
            this.type = type;
        }
    }
    
    class Edge{
    
        constructor(id, name, source, target, country, balance, zip, address, icon, isActive, type){
            this.id = id;
            this.name = name;
            this.source = source;
            this.target = target;
            this.country = country;
            this.balance = balance;
            this.zip = zip;
            this.address = address;
            this.isActive = isActive;
            this.type = type;
        }
    }
    
    for (let i = 0; i < noOfNodes; i++) {
    
        const id = 'node'+i;
        const name ='nodeName'+i;
        const country = countries[Math.floor(Math.random() * countries.length)];
        const balance = Math.floor(Math.random() * (100000 - 10000));
        const zip = Math.floor(Math.random() * (999999 - 10000));
        let tempAddress = '';
        let limitForAddress = 42;
        for (let k = 0; k < limitForAddress; k++) {
            tempAddress += possiblityOfAddress.charAt(Math.floor(Math.random() * possiblityOfAddress.length));        
            if((k % 14) == 1){
                tempAddress += ',';
            }
        }
        tempAddress += ", " + zip;
        const address = tempAddress;
        const icon = icons[Math.floor(Math.random() * icons.length)];
        
        const isActive = (Math.floor(Math.random()*2)) ? true : false;
        const type = nodeTypes[Math.floor(Math.random() * nodeTypes.length)];
    
        const node = new Node(id, name, country, balance, zip, address, icon, isActive, type);
    
        data.nodes.push(node);
    }
    
    
    for (let j = 0; j < noOfEdges; j++) {
    
        const id = 'edge'+j;
        const name = 'edgeName'+j;
        const source = data.nodes[Math.floor(Math.random() * data.nodes.length)].id;
        let tempTarget = data.nodes[Math.floor(Math.random() * data.nodes.length)].id;
        
        while(tempTarget == source){
            tempTarget = data.nodes[Math.floor(Math.random() * data.nodes.length)].id;
        }
        
        const target = tempTarget;
        const country = countries[Math.floor(Math.random() * countries.length)];
        const balance = Math.floor(Math.random() * (100000 - 10000));
        const zip = Math.floor(Math.random() * (999999 - 10000));
        let tempAddress = '';
        let limitForAddress = 42;
        for (let k = 0; k < limitForAddress; k++) {
            tempAddress += possiblityOfAddress.charAt(Math.floor(Math.random() * possiblityOfAddress.length));        
            if((k % 14) == 1){
                tempAddress += ',';
            }
        }
        tempAddress += ", " + zip;
        const address = tempAddress;
        const icon = icons[Math.floor(Math.random() * icons.length)];
    
        const isActive = (Math.floor(Math.random()*2)) ? true : false;
    
        const type = edgeTypes[Math.floor(Math.random() * edgeTypes.length)];
    
        const edge = new Edge(id, name, source, target, country, balance, zip, address, icon, isActive, type);

        data.edges.push(edge);
    }
    
    // console.log(data);
    // fileSr.saveAs();
    // saveAs(data, '' + noOfNodes + '-' + noOfEdges + '_Data.json');

    fs.writeFile('' + noOfNodes + '-' + noOfEdges + '_Data.json', JSON.stringify(data), function(err, data) {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
}

// generateNodesEdges(50,100);
// generateNodesEdges(50,150);
generateNodesEdges(400,600);
generateNodesEdges(600,1000);
// generateNodesEdges(1000,2000);

