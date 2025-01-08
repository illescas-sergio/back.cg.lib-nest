// import { authorsSeparator } from './authorsSeparator';
// import { bothAuthorsTestService } from './authorsConsulting';

// export function authorNamesManager(author: string) {
//   const full = authorsSeparator(author);

//   const authorsIds: string[] = [];
//   if (full.length > 1) {
//     const arrayAuthors = bothAuthorsTestService(full);
//         console.log(arrayAuthors)
//         try {
//             for (const el of arrayAuthors) {
//                 const { first_name, last_name } = el;
//                 const authorExist = await findAuthorByCompleteName(first_name, last_name);
//                 if (authorExist.length < 1) {
//                     throw new Error(`Autor no encontrado: ${first_name} ${last_name}`);
//                 }
//                 authorsIds.push(authorExist[0]._id);
//             }
//         } catch (err) {
//             return res.status(404).send(err.message);
//         }
//     } else {
//         const {first_name, last_name} = nameSplit(author);
//         const authorExist = await findAuthorByCompleteName(first_name, last_name);
//         if(authorExist.length < 1) return res.status(404).send("No se encuentra el autor");
//         const authorId = authorExist[0]._id;
//         authorsIds.push(authorId)
//     }

//     const publisherExist = await findPublisherByName(publisher);

//     if(publisherExist.length < 1) return res.status(404).send("No se encuentra la editorial");
//     const publisherId = publisherExist[0]._id;

//     const verifiedReleaseDate = dateFormatter(release_date)

//     const bookData = {
//         author: authorsIds,
//         publisher: publisherId,
//         title: title,
//         category: category,
//         price: price,
//         release_date: verifiedReleaseDate,
//         description: description
//     }

//     const addedBook = await bookPostService(bookData);
//     if(!addedBook) return res.status(400).send(addedBook)

//     return res.send(addedBook)
// }
