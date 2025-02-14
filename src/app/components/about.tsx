import Image from "next/image"
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className=" container px-4 mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">

                        <div className=" relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="foto do cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>
                        <div className="absolute w-40 h-40 right-4 -bottom-8  border-4 overflow-hidden border-white rounded-lg ">
                            <Image
                                src={about2Img}
                                alt="foto do cachorro2"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>
                    <div className="space-y-6 mt-10" >
                        <h2 className="text-4xl font-bold">Sobre</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Aberto desde 2006
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Equipe com mais de 10 veterinários.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500" />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>
                        <div className="flex gap-2">
                            <a href="#"
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                            </a>
                            <a href="#"
                                className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                            >
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da loja
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
};
