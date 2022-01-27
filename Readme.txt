1) must have a sendgrid account
2) Must have a netlify account 
3) Must have a supabase account




=============================================
   SUPABASE PUBLIC TABLES

   1) event
         **columns

         event_title (varchar)
         ticket_image (varchar)
         meta (jsonB)
         isActive (Bool)
         date (varchar)
         seller_id (int8)
         seller_name(varchar)
         blob(json)



   2) tickets
         ** columns

      ticketId(varchar)
      event (int8)
      isActive (bool)
      meta(jsonB)
      user (int8)


   3) users
         ** columns

         name (varchar)
         email (varchar)
         meta (json)
         role (varchar)
         wallet (varchar)