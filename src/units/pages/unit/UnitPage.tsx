import { Navigate, useParams } from "react-router";

import { useUnit } from "@/hooks/useUnit";

import { ElementCard } from "./ui/ElementCard";

import section2Container from "@/assets/containers/unit_section_2_container.png";
import section2Image from "@/assets/images/unit_section_2_image.png";

import section3Container from "@/assets/containers/unit_section_3_container.png";
import objectivesIcon from "@/assets/icons/sections/unit_section_3_stage-objectives.png";
import competencesIcon from "@/assets/icons/sections/unit_section_3_key-competences.png";
import areasIcon from "@/assets/icons/sections/unit_section_3_contents-areas.png";
import transversalIcon from "@/assets/icons/sections/unit_section_3_common-elements.png";
import odsIcon from "@/assets/icons/sections/unit_section_3_ods.png";

import section4Container from "@/assets/containers/unit_section_4_container.png";
import { UnitSection } from "./ui/UnitSection";
import { SimpleStructureCard } from "./ui/SimpleStructureCard";
import { GroupStructureCard } from "./ui/GroupStructureCard";
import { GroupAltStructureCard } from "./ui/GroupAltStructureCard";
import methodologyIcon from "@/assets/icons/sections/unit_section_4_methodology.png";
import assemblyIcon from "@/assets/icons/sections/unit_section_4_assembly.png";
import efemerideIcon from "@/assets/icons/sections/unit_section_4_efemeride.png";
import evaluationIcon from "@/assets/icons/sections/unit_section_4_evaluation.png";
import spacesIcon from "@/assets/icons/sections/unit_section_4_spaces.png";
import materialsIcon from "@/assets/icons/sections/unit_section_4_materials.png";
import personalIcon from "@/assets/icons/sections/unit_section_4_personal.png";
import temporalIcon from "@/assets/icons/sections/unit_section_4_temporal.png";
import motivationIcon from "@/assets/icons/sections/unit_section_4_motivation.png";
import developmentIcon from "@/assets/icons/sections/unit_section_4_development.png";
import psychomotricityIcon from "@/assets/icons/sections/unit_section_4_psychomotricity.png";
import literacyIcon from "@/assets/icons/sections/unit_section_4_literacy.png";
import mathIcon from "@/assets/icons/sections/unit_section_4_math.png";
import digitalIcon from "@/assets/icons/sections/unit_section_4_digital.png";
import synthesisIcon from "@/assets/icons/sections/unit_section_4_synthesis.png";
import cultureIcon from "@/assets/icons/sections/unit_section_4_culture.png";
import artIcon from "@/assets/icons/sections/unit_section_4_art.png";
import emotionsIcon from "@/assets/icons/sections/unit_section_4_emotions.png";

import section5Container from "@/assets/containers/unit_section_5_container.png";
import section5Image from "@/assets/images/unit_section_5_image.png";

import section6Container from "@/assets/containers/unit_section_6_container.png";
import { CoordinationCard } from "./ui/CoordinationCard";
import familyIcon from "@/assets/icons/sections/unit_section_6_family.png";
import teachingTeamIcon from "@/assets/icons/sections/unit_section_6_teaching-team.png";

import section7Container from "@/assets/containers/unit_section_7_container.png";
import section7Phrase from "@/assets/containers/unit_section_7_phrase.png";
import section7Image from "@/assets/images/unit_section_7_image.png";

import section8Container from "@/assets/containers/unit_section_8_container.png";
import section8Image from "@/assets/images/unit_section_8_image.png";

export const UnitPage = () => {

  const { id = '' } = useParams();
  const { unit } = useUnit({ id: Number(id) });

  if (unit === undefined) return <Navigate to={'/'} />;

  return (
    <main className="unit-layout-content">

      {/* Introduction */}
      <UnitSection id="introduction" first={true}>
        <div className="z-10 flex justify-center mt-6">
          <img
            src={unit.portraitImage}
            alt=""
            className="h-100 w-80 shrink-0 object-contain
            md:h-140 md:w-96"
          />
        </div>
      </UnitSection>

      {/* Context */}
      <UnitSection
        id="context"
        key={"context"}
        title={{
          container: section2Container,
          label: "Contexto y características del alumnado",
          color: "text-soft-ink-blue"
        }}
      >
        <div
          className="z-10 flex justify-center 
          mt-6
          md:mt-8"
        >
          <img
            src={section2Image}
            alt=""
            className="max-w-full shrink-0 object-contain drop-shadow-[0_20px_35px_-22px_oklch(0.35_0.08_60/0.5)]
            h-70
            md:h-96
            xl:h-112"
          />
        </div>
      </UnitSection>

      {/* Curricular Elements */}
      <UnitSection
        id="curricular-elements"
        key={"curricular-elements"}
        title={{
          container: section3Container,
          label: "Elementos curriculares",
          color: "text-pastel-lime-deep"
        }}
      >
        {/* Subsections */}
        <div
          className="grid mx-auto w-full max-w-5xl px-4 mt-8
          grid-cols-1 gap-4
          md:grid-cols-4
          xl:gap-5"
        >
          <ElementCard
            key={"stage-objectives"}
            label={"Objetivos de etapa"}
            icon={objectivesIcon}
            color={"text-soft-coral"}
            borderColor={"border-soft-coral/50"}
            bgColor={"bg-soft-coral-light/30"}
            direction={"default"}
            className="md:col-span-2"
          />

          <ElementCard
            key={"key-competences"}
            label={"Competencias clave"}
            icon={competencesIcon}
            color={"text-pastel-turquoise"}
            borderColor={"border-pastel-turquoise/50"}
            bgColor={"bg-pastel-turquoise-soft/40"}
            direction={"reverse"}
            className="md:col-span-2"
          />

          <ElementCard
            key={"contents-areas"}
            label={"Contenidos y áreas de experiencia"}
            icon={areasIcon}
            color={"text-pastel-lime-deep"}
            borderColor={"border-pastel-lime-deep/40"}
            bgColor={"bg-pastel-lime-soft/40"}
            direction={"default"}
            className="md:col-span-2"
          />

          <ElementCard
            key={"common-elements"}
            label={"Elementos comunes y transversales"}
            icon={transversalIcon}
            color={"text-pastel-orange"}
            borderColor={"border-pastel-orange/50"}
            bgColor={"bg-pastel-orange-soft/40"}
            direction={"reverse"}
            className="md:col-span-2"
          />

          <ElementCard
            key={"ods"}
            label={"Objetivos de desarrollo sostenible"}
            icon={odsIcon}
            color={"text-pastel-green"}
            borderColor={"border-pastel-green/50"}
            bgColor={"bg-pastel-green-soft/40"}
            direction={"default"}
            className="md:col-span-2 md:col-start-2"
          />
        </div>
      </UnitSection>

      {/* Structure */}
      <UnitSection
        id="structure"
        key={"structure"}
        title={{
          container: section4Container,
          label: "Desarrollo de la unidad",
          color: "text-pastel-pink-deep",
        }}
      >
        {/* Subsections */}
        <div
          className="grid mx-auto w-full px-4 mt-8
          grid-cols-1 gap-5
          md:grid-cols-2
          xl:grid-cols-5 xl:gap-6"
        >
          {/* Subsections */}
          <SimpleStructureCard
            label="Principios metodológicos"
            icon={methodologyIcon}
            color="text-soft-coral"
            borderColor="border-soft-coral/50"
            bgColor="bg-soft-coral-light/30"
            direction="reverse"
            className="md:col-span-2 xl:col-span-3 xl:col-start-1"
          />

          <GroupStructureCard
            label="Formas de organización"
            color="text-pastel-orange"
            borderColor="border-pastel-orange/50"
            bgColor="bg-pastel-orange-soft/25"
            icons={[spacesIcon, materialsIcon, personalIcon, temporalIcon]}
            className="md:col-span-2 xl:col-span-3 xl:col-start-2"
          />

          <SimpleStructureCard
            label="Asamblea"
            icon={assemblyIcon}
            color="text-pastel-turquoise"
            borderColor="border-pastel-turquoise/50"
            bgColor="bg-pastel-turquoise-soft/35"
            className="md:col-span-2 xl:col-span-3 xl:col-start-3"
          />

          <GroupStructureCard
            label="Misiones"
            color="text-soft-purple-dark"
            borderColor="border-soft-purple/50"
            bgColor="bg-pastel-lavender-soft/35"
            icons={[motivationIcon, developmentIcon, psychomotricityIcon, literacyIcon, mathIcon, digitalIcon, synthesisIcon]}
            className="md:col-span-2 xl:col-span-3 xl:col-start-2"
          />

          <SimpleStructureCard
            label="Efeméride"
            icon={efemerideIcon}
            color="text-pastel-lime-deep"
            borderColor="border-pastel-lime-deep/40"
            bgColor="bg-pastel-lime-soft/35"
            direction="reverse"
            className="md:col-span-2 xl:col-span-3 xl:col-start-1"
          />

          <GroupAltStructureCard
            label="Proyectos"
            color="text-pastel-pink-deep"
            borderColor="border-pastel-pink-deep/40"
            bgColor="bg-pastel-pink-soft/30"
            icons={[cultureIcon, artIcon, emotionsIcon]}
            className="md:col-span-2 xl:col-span-3 xl:col-start-2"
          />

          <SimpleStructureCard
            label="Evaluación"
            icon={evaluationIcon}
            color="text-pastel-blue"
            borderColor="border-pastel-blue/40"
            bgColor="bg-pastel-blue-soft/35"
            className="md:col-span-2 xl:col-span-3 xl:col-start-3"
          />
        </div>
      </UnitSection>

      {/* Diversity */}
      <UnitSection
        id="diversity"
        key={"diversity"}
        title={{
          container: section5Container,
          label: "Atención a la diversidad",
          color: "text-warm-gold"
        }}
      >
        <div
          className="z-10 flex justify-center 
          mt-6
          md:mt-8"
        >
          <img
            src={section5Image}
            alt=""
            className="max-w-full shrink-0 object-contain drop-shadow-[0_20px_35px_-22px_oklch(0.35_0.08_60/0.5)]
            h-48
            md:h-96
            xl:h-120"
          />
        </div>
      </UnitSection>

      {/* Coordination */}
      <UnitSection
        id="coordination"
        key={"coordination"}
        title={{
          container: section6Container,
          label: "Formas de coordinación",
          color: "text-pastel-green-deep"
        }}
      >
        <div
          className="relative grid mx-auto w-full px-4 mt-8 
          grid-cols-1 gap-6 
          md:grid-cols-2
          xl:grid-cols-6
          "
        >
          <CoordinationCard
            label="Familia"
            icon={familyIcon}
            color="text-pastel-fuchsia-deep"
            borderColor="border-pastel-fuchsia/45"
            bgColor="bg-pastel-fuchsia/10"
            direction="default"
            className="md:col-span-1 xl:col-span-2 xl:col-start-2"
          />

          <CoordinationCard
            label="Equipo docente"
            icon={teachingTeamIcon}
            color="text-pastel-turquoise-deep"
            borderColor="border-pastel-turquoise/45"
            bgColor="bg-pastel-turquoise-soft/30"
            direction="reverse"
            className="md:col-span-1 xl:col-span-2 xl:col-start-4"
          />
        </div>
      </UnitSection>

      {/* Conclusion */}
      <UnitSection
        id="conclusion"
        key={"conclusion"}
        title={{
          container: section7Container,
          label: "Conclusión",
          color: "text-pastel-orange-deep"
        }}
      >
        <div
          className="z-10 flex justify-center 
          mt-6
          md:mt-8"
        >
          <img
            src={section7Image}
            alt=""
            className="max-w-full shrink-0 object-contain drop-shadow-[0_20px_35px_-22px_oklch(0.35_0.08_60/0.5)]
            h-64
            md:h-130
            xl:h-160"
          />
        </div>

        <div
          className="mx-auto flex items-center justify-center bg-contain bg-center bg-no-repeat 
          h-26 mt-2
          md:h-46 md:mt-6
          lg:h-54
          xl:mt-8"
          style={{ backgroundImage: `url(${section7Phrase})` }}
        >
          <h2
            className="text-center font-playwrite font-bold italic leading-tight            
            text-md max-w-78
            md:text-2xl md:max-w-140 
            lg:text-3xl lg:max-w-160"
          >
            "La educación no cambia el mundo, cambia a las personas que van a cambiar el mundo."
          </h2>
        </div>
      </UnitSection>

      {/* Bibliographic */}
      <UnitSection
        id="bibliographic"
        key={"bibliographic"}
        title={{
          container: section8Container,
          label: "Referencias bibliográficas",
          color: "text-pastel-red-deep"
        }}
        last={true}
      >
        <div
          className="z-10 flex justify-center 
          mt-8
          md:mt-10"
        >
          <img
            src={section8Image}
            alt=""
            className="max-w-full shrink-0 object-contain drop-shadow-[0_20px_35px_-22px_oklch(0.35_0.08_60/0.5)]
            h-62
            md:h-115
            xl:h-120"
          />
        </div>
      </UnitSection>
    </main >
  );
};
