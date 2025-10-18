import OrbitSkill from "../components/OrbitSkill"
import Skills from "../components/Skills"


const Skill = () => {
  return (
    <section style={{    background: 'radial-gradient(125% 125% at 50% 100%, #0a0a0a 40%, #000000 100%)'}}>

    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-white">
        My <span className="text-cyan-400">Expertise</span> Timeline
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center">
        <div className="w-full">
          <Skills />
        </div>

        <div className="w-full flex items-center justify-center">
          <OrbitSkill />
        </div>
      </div>
    </div>
    </section>
    
  )
}

export default Skill