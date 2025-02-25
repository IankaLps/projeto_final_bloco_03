function Home() {
    return (
        <>
            <div className="flex justify-center bg-teal-800">
                <div className="container grid grid-cols-2 text-white">
                    <div className="flex flex-col items-center justify-center gap-4 py-4">
                        <h2 className="text-5xl max-sm:text-2xl font-bold">
                            Seja bem vinde!
                        </h2>
                        <p className="text-xl">Aqui você encontra os melhores Produtos!</p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Cadastrar Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/yijg14v4w/Farm%C3%A1cia%20Ecommerce/Pharmacist-amico%20(1).png?updatedAt=1740491815557" 
                            alt="Imagem da Página Home" 
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home