"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Globe, Wrench, AlertTriangle, Gamepad2, Database } from "lucide-react"

// Lista de proyectos - fácil de modificar desde JavaScript
const projectsData = [
  {
    id: 1,
    name: "Previo",
    url: "https://srwilson89.github.io/previo/",
    description: "Proyecto de vista previa y demostración",
    icon: Globe,
    tags: ["Web", "Demo"],
  },
  {
    id: 2,
    name: "Error 404",
    url: "https://srwilson89.github.io/error404/",
    description: "Página de error personalizada con diseño creativo",
    icon: AlertTriangle,
    tags: ["UI/UX", "Error Page"],
  },
  {
    id: 3,
    name: "Reparaciones",
    url: "https://srwilson89.github.io/Reparaciones/",
    description: "Sistema de gestión de reparaciones",
    icon: Wrench,
    tags: ["Sistema", "Gestión"],
  },
  {
    id: 4,
    name: "Warhammer 40K Shooter",
    url: "https://srwilson89.github.io/Warhammer40KShooter/",
    description: "Juego de disparos ambientado en el universo Warhammer 40K",
    icon: Gamepad2,
    tags: ["Juego", "JavaScript"],
  },
  {
    id: 5,
    name: "SQL Manager",
    url: "https://srwilson89.github.io/SQL/",
    description: "Herramienta para gestión y consultas SQL",
    icon: Database,
    tags: ["Base de Datos", "SQL"],
  },
]

export default function Portfolio() {
  const [projects, setProjects] = useState(projectsData)

  // Función para añadir nuevos proyectos (ejemplo de uso)
  const addProject = (newProject: (typeof projectsData)[0]) => {
    setProjects((prev) => [...prev, { ...newProject, id: Date.now() }])
  }

  // Función para abrir enlace en nueva pestaña
  const openProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Mi Portfolio</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Colección de mis proyectos web</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-white dark:bg-slate-800">
                {projects.length} Proyectos
              </Badge>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                        <IconComponent className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">{project.name}</CardTitle>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </CardDescription>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => openProject(project.url)}
                    className="w-full group-hover:bg-blue-600 transition-colors"
                    size="sm"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Ver Proyecto
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Add Project Example (Hidden by default) */}
        <div className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-lg border border-dashed border-slate-300 dark:border-slate-600">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Añadir Nuevo Proyecto</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Para añadir un nuevo proyecto, usa la función{" "}
            <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">addProject()</code> desde
            JavaScript:
          </p>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
            <code className="text-sm text-slate-800 dark:text-slate-200">
              {`addProject({
  name: "Nuevo Proyecto",
  url: "https://tu-url.com",
  description: "Descripción del proyecto",
  icon: Code,
  tags: ["React", "TypeScript"]
})`}
            </code>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-16">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2025 Mi Portfolio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
