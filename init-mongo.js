db.createUser({
    user: 'root',
    pwd: 'root2024',
    roles: [
      {
        role: 'readWrite',
        db: 'couchsurfing-db'
      }
    ]
})