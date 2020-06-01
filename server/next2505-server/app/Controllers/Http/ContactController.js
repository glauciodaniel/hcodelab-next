'use strict'

const Contact = use('App/Models/Contacts')

class ContactController {
    async store ({ request }) {
        const data = request.only(['name','email','msg'])
        
        const contact = await Contact.create(data)

        return contact
    }

    async index(){
        return await Contact.all()
    }
}

module.exports = ContactController
