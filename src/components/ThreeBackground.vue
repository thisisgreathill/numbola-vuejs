<template>
  <div ref="container" class="absolute inset-0 z-0"></div>
</template>

<script>
import * as THREE from 'three'

export default {
  name: 'ThreeBackground',
  mounted() {
    this.initThree()
    window.addEventListener('resize', this.onWindowResize)
    window.addEventListener('mousemove', this.onMouseMove)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize)
    window.removeEventListener('mousemove', this.onMouseMove)
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    if (this.renderer) {
      this.renderer.dispose()
    }
  },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      particles: null,
      animationId: null,
      mouseX: 0,
      mouseY: 0
    }
  },
  methods: {
    initThree() {
      this.scene = new THREE.Scene()

      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.container.clientWidth / this.$refs.container.clientHeight,
        0.1,
        1000
      )
      this.camera.position.z = 5

      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      })
      this.renderer.setSize(this.$refs.container.clientWidth, this.$refs.container.clientHeight)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      this.$refs.container.appendChild(this.renderer.domElement)

      const geometry = new THREE.BufferGeometry()
      const vertices = []
      const colors = []

      const color1 = new THREE.Color(0x53d22d)
      const color2 = new THREE.Color(0x22c55e)

      for (let i = 0; i < 3000; i++) {
        const x = (Math.random() - 0.5) * 100
        const y = (Math.random() - 0.5) * 100
        const z = (Math.random() - 0.5) * 100
        vertices.push(x, y, z)

        const mixedColor = color1.clone().lerp(color2, Math.random())
        colors.push(mixedColor.r, mixedColor.g, mixedColor.b)
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.15,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      })

      this.particles = new THREE.Points(geometry, material)
      this.scene.add(this.particles)

      const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
      const edges = new THREE.EdgesGeometry(cubeGeometry)
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x53d22d,
        transparent: true,
        opacity: 0.3
      })
      this.cube = new THREE.LineSegments(edges, lineMaterial)
      this.cube.position.set(5, 0, -5)
      this.scene.add(this.cube)

      const torusGeometry = new THREE.TorusGeometry(1.5, 0.5, 16, 100)
      const torusEdges = new THREE.EdgesGeometry(torusGeometry)
      const torusMaterial = new THREE.LineBasicMaterial({
        color: 0x22c55e,
        transparent: true,
        opacity: 0.3
      })
      this.torus = new THREE.LineSegments(torusEdges, torusMaterial)
      this.torus.position.set(-5, 0, -5)
      this.scene.add(this.torus)

      this.animate()
    },
    animate() {
      this.animationId = requestAnimationFrame(this.animate)

      this.particles.rotation.x += 0.0002
      this.particles.rotation.y += 0.0003

      if (this.cube) {
        this.cube.rotation.x += 0.002
        this.cube.rotation.y += 0.003
      }

      if (this.torus) {
        this.torus.rotation.x += 0.003
        this.torus.rotation.y += 0.002
      }

      this.camera.position.x += (this.mouseX * 0.05 - this.camera.position.x) * 0.05
      this.camera.position.y += (-this.mouseY * 0.05 - this.camera.position.y) * 0.05
      this.camera.lookAt(this.scene.position)

      this.renderer.render(this.scene, this.camera)
    },
    onWindowResize() {
      if (!this.$refs.container) return

      this.camera.aspect = this.$refs.container.clientWidth / this.$refs.container.clientHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.$refs.container.clientWidth, this.$refs.container.clientHeight)
    },
    onMouseMove(event) {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1
      this.mouseY = (event.clientY / window.innerHeight) * 2 - 1
    }
  }
}
</script>
