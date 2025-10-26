import React, {useEffect, useState} from 'react'
import {ArticlesProvider} from "../../dataprovider/ArticlesProvider.js";
import emptyIcon from '../../assets/icons/emptyIcon.png'

const ArticlesList = () => {
    const [articlesList, setArticlesList] = useState([]);
    const fetchArticles = async () => {
        const response = await ArticlesProvider.getArticlesList();
        setArticlesList(response.results);
        console.log(response.results);
    }

    const getFullDate = (date) => {
       const formattedDate = new Date(date).toLocaleDateString('fr-FR',{
           day: '2-digit',
           month: '2-digit',
           year: 'numeric',
       })
       return formattedDate;
    }

    useEffect(() => {
        fetchArticles();

    }, []);
    return (
        <>


            <div className="mt-5 py-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 ">
                {articlesList.map((article) => {
                    return (
                        <div className="md:w-full rounded-xl rounded- overflow-hidden shadow-lg bg-[white]">

                            <div className={'text-black flex flex-row justify-between px-3 pt-3'}>
                                <span> Ecrit par: {article.author.last_name} {article.author.first_name} </span>
                                <span> {getFullDate(article.created_at)}</span>
                            </div>
                            <div className="flex justify-center items-center">
                                {article.imageUrl ? (
                                    <img
                                        className="w-full object-cover"
                                        src="https://cdn.pixabay.com/photo/2021/12/12/18/04/mountains-6865752_1280.jpg"
                                        alt="Sunset in the mountains"
                                    />
                                ) : (
                                    <img
                                        className="w-1/2"
                                        src={emptyIcon}
                                        alt="Image manquante"
                                    />
                                )}
                            </div>

                            <div className="px-3 ">
                                <div
                                    className=" text-[var(--weebPrimaryColor)] font-bold text-xl mb-2">{article.title}</div>
                                <p className="text-gray-700 line-clamp-5">
                                    {article.content}
                                </p>
                            </div>

                            <div className="px-6 pt-4 pb-2">
                                <span
                                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                 #{article.category.name}
                                </span>
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    )
}

export default ArticlesList
