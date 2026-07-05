import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/selection/mode')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/selection/mode"!</div>
}
